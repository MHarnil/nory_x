import { useMemo } from 'react';
import { Page, View, Text, Font, Image, Document, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }],
});

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        col4: { width: '25%' },
        col8: { width: '75%' },
        col6: { width: '50%' },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700, marginRight: '150px' },
        alignRight: { textAlign: 'right' },

        page: {
          fontSize: 9,
          lineHeight: 1.6,
          fontFamily: 'Roboto',
          backgroundColor: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '40px 24px 120px 24px',
        },
        footer: {
          left: 0,
          right: 0,
          bottom: 0,
          padding: 24,
          margin: 'auto',
          borderTopWidth: 1,
          borderStyle: 'solid',
          position: 'absolute',
          borderColor: '#DFE3E8',
        },
        gridContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        table: {
          display: 'flex',
          width: 'auto',
        },
        tableColumn: {
          padding: '8px 0',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#DFE3E8',
        },
        noBorder: {
          paddingTop: 8,
          paddingBottom: 0,
          borderBottomWidth: 0,
        },

      }),
    []
  );

// ----------------------------------------------------------------------

const User2pdf = ({ userData }) => {
  const styles = useStyles();

  // Debugging: check incoming data
  console.log('userData in PDF:', userData);

  return (
    <Document>
      <Page size="A4" orientation={'landscape'} style={styles.page}>
        <View style={{ flexDirection: 'row',display:"flex",justifyContent:"space-between" }}>
          <Text style={{padding:"1vh" }}>id</Text>
          <Text style={{padding:"1vh" }}>fullname</Text>
          <Text style={{padding:"1vh" }}>email</Text>
          <Text style={{padding:"1vh" }}>number</Text>
          <Text style={{padding:"1vh" }}>country</Text>
          <Text style={{padding:"1vh" }}>state</Text>
          <Text style={{padding:"1vh" }}>city</Text>
          <Text style={{padding:"1vh" }}>address</Text>
          <Text style={{padding:"1vh" }}>zipCode</Text>
        </View>

        {userData?.map((item, index) => (
          <View style={styles.tableColumn} key={item.id || index}>
            <View style={{width:"100%" ,flexDirection: 'row',display:"flex",justifyContent:"space-between" }}>
              <Text style={{ padding: '1vh', width: '3%' }}>{index + 1}</Text>
              <Text style={{ padding: '1vh', width: '7%' }}>{item.fullname}</Text>
              <Text style={{ padding: '1vh', width: '10%' }}>{item.email}</Text>
              <Text style={{ padding: '1vh', width: '10%' }}>{item.phonenumber}</Text>
              <Text style={{ padding: '1vh', width: '7%' }}>{item.country}</Text>
              <Text style={{ padding: '1vh', width: '7%' }}>{item.state}</Text>
              <Text style={{ padding: '1vh', width: '10%' }}>{item.city}</Text>
              <Text style={{ padding: '1vh', width: '5%' }}>{item.address}</Text>
              <Text style={{ padding: '1vh', width: '5%' }}>{item.code}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default User2pdf;
