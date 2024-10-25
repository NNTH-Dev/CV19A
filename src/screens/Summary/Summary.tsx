import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import MapView, { Marker } from 'react-native-maps';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Icon from 'react-native-vector-icons/Ionicons';
import { useQuery } from '@apollo/client';

import { styles } from './style';
import { COLORS, SIZES } from '../../constants/theme';
// import { GET_PARAMS_COVID } from '../../api/graphql/queries/paramsCovid';

const textDanger = 'Bị nhiễm';
const textSucess = 'Khỏi bệnh';
const textDeath = 'Tử vong';

type SummaryProps = {};

const Summary = (props: SummaryProps) => {
  const colors = [COLORS.yellow, COLORS.green, COLORS.red];
  const keys = ['danger', 'sucess', 'death'];
  const [dataProvince, setDataProvince] = useState<any>([]);
  const [dataNational, setDataNational] = useState<any>([]);
  const [cases, setCase] = useState({
    Confirmed: 0,
    Recovered: 0,
    Deaths: 0,
  });
  const [tabs, setTabs] = useState(0);
  // const { loading, error, data } = useQuery(GET_PARAMS_COVID);

  const [markerList, setMarkers] = useState<any>();

  // useEffect(() => {
  //   if (!loading && data) {
  //     setDataNational(data.totalVietNam);
  //     setDataProvince(data.provinces);
  //   }
  // }, [loading, data]);

  // console.log('DATA COVID', dataNational);
  // console.log('DATA PIE', cases);
  // console.log('DATA PROVINCE', dataProvince);

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const dataPie = [
    {
      name: textDanger,
      population: 550969,
      color: COLORS.yellow,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: textSucess,
      population: 311170,
      color: COLORS.green,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: textDeath,
      population: 15702,
      color: COLORS.red,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];
  const dataArea = [
    {
      month: new Date(2021, 0, 1),
      danger: 129356,
      sucess: 60289,
      death: 2632,
    },
    {
      month: new Date(2021, 1, 1),
      danger: 282648,
      sucess: 150301,
      death: 9160,
    },
    {
      month: new Date(2021, 2, 1),
      danger: 486003,
      sucess: 286029,
      death: 9831,
    },
    {
      month: new Date(2021, 3, 1),
      danger: 564646,
      sucess: 311654,
      death: 12655,
    },
  ];

  // if (loading) {
  //   return (
  //     <View style={styles.containerLoading}>
  //       <ActivityIndicator size="large" color={COLORS.primary} />
  //     </View>
  //   );
  // }
  // if (error) {
  //   console.error(error);
  //   return (
  //     <View style={styles.container}>
  //       <Text>Error :((</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && (
        <StatusBar backgroundColor={COLORS.primary} />
      )}
      <View style={styles.headerBg}>
        <SafeAreaView>
          <Text style={styles.txtHeader}>Thông tin dịch bệnh</Text>
          <View style={styles.topParams}>
            <View style={[styles.viewData, { backgroundColor: COLORS.yellow }]}>
              <Text style={styles.status}>{textDanger}</Text>
              {dataNational.confirm ?? (
                <Text style={styles.data}>{dataNational.confirmed}</Text>
              )}
            </View>
            <View style={[styles.viewData, { backgroundColor: COLORS.green }]}>
              <Text style={styles.status}>{textSucess}</Text>
              {dataNational.recovered ?? (
                <Text style={styles.data}>{dataNational.recovered}</Text>
              )}
            </View>
            <View style={[styles.viewData, { backgroundColor: COLORS.red }]}>
              <Text style={styles.status}>{textDeath}</Text>
              {dataNational.deaths ?? (
                <Text style={styles.data}>{dataNational.deaths}</Text>
              )}
            </View>
          </View>
          <Text style={styles.txtDateUpdate}>Cập nhật: 6:10, 09/06/2022</Text>

          <View style={styles.listTab}>
            <TouchableOpacity
              onPress={() => setTabs(0)}
              style={[styles.button, tabs === 0 && styles.btnEnable]}
            >
              <Text
                style={[
                  styles.buttonText,
                  tabs === 1 && { color: COLORS.white },
                ]}
              >
                Map
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTabs(1)}
              style={[styles.button, tabs === 1 && styles.btnEnable]}
            >
              <Text
                style={[
                  styles.buttonText,
                  tabs === 0 && { color: COLORS.white },
                ]}
              >
                Biểu đồ
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      {tabs === 1 && (
        <>
          <PieChart
            paddingLeft="10"
            data={dataPie}
            width={SIZES.width}
            height={180}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            center={[10, 0]}
            absolute
          />
          <StackedAreaChart
            keys={['danger', 'sucess', 'death']}
            style={styles.areaChart}
            data={dataArea}
            // keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
            // svgs={svgs}
          />
        </>
      )}
      {tabs === 0 && (
        <View style={{ flex: 1 }}>
          <MapView
            // customMapStyle={styles.mapStyle}
            onMapReady={() => setMarkers(dataProvince.length)}
            mapType="standard"
            provider="google"
            style={{ flex: 1 }}
            region={{
              latitude: 10.823099,
              longitude: 106.629664,
              latitudeDelta: 0.1646,
              longitudeDelta: 0.5994,
            }}
          >
            {/* {markerList !== 0
              ? dataProvince.map((d, index) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: Number(d.Lat) + 0.34,
                      longitude: Number(d.Long) - 0.00002,
                    }}
                    tracksViewChanges={false}
                    anchor={{ x: 0.5, y: -0.5 }}
                  >
                    <View style={styles.markerPoint}>
                      <Icon
                        name="ios-warning"
                        size={30}
                        color="rgba(255,255,255,1)"
                      />
                    </View>
                  </Marker>
                ))
              : null} */}
          </MapView>
        </View>
      )}
    </View>
  );
};

export default Summary;
