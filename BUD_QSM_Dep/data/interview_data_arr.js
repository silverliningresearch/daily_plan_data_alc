let interview_data_arr_raw = `[
    {
        "InterviewId": "1223",
        "InterviewEndDate": "2023-04-08 12:48:18",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "download_time": "12-05-2023 13:36:07"
    },
    {
        "InterviewId": "1224",
        "InterviewEndDate": "2023-04-08 12:53:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TLV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1225",
        "InterviewEndDate": "2023-04-08 12:58:21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TLV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1226",
        "InterviewEndDate": "2023-04-08 13:03:18",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1227",
        "InterviewEndDate": "2023-04-08 13:08:11",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1228",
        "InterviewEndDate": "2023-04-08 13:13:23",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1229",
        "InterviewEndDate": "2023-04-08 13:19:06",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1230",
        "InterviewEndDate": "2023-04-08 13:23:16",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1231",
        "InterviewEndDate": "2023-04-08 13:28:02",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1232",
        "InterviewEndDate": "2023-04-08 13:32:12",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1233",
        "InterviewEndDate": "2023-04-08 13:38:21",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1234",
        "InterviewEndDate": "2023-04-08 13:42:27",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1235",
        "InterviewEndDate": "2023-04-08 13:46:47",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1236",
        "InterviewEndDate": "2023-04-08 13:52:24",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1237",
        "InterviewEndDate": "2023-04-08 14:01:15",
        "InterviewState": "Complete",
        "Flight": "MS - Egyptair",
        "Dest": "CAI",
        "AirlineCode": "MS"
    },
    {
        "InterviewId": "1238",
        "InterviewEndDate": "2023-04-09 07:40:36",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1239",
        "InterviewEndDate": "2023-04-09 07:44:18",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1240",
        "InterviewEndDate": "2023-04-09 07:48:22",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1241",
        "InterviewEndDate": "2023-04-09 07:53:09",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1242",
        "InterviewEndDate": "2023-04-09 07:59:11",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1243",
        "InterviewEndDate": "2023-04-09 08:04:59",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1244",
        "InterviewEndDate": "2023-04-09 08:09:17",
        "InterviewState": "Complete",
        "Flight": "D8 - Norwegian Air International",
        "Dest": "ARN",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "1245",
        "InterviewEndDate": "2023-04-09 08:20:15",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1246",
        "InterviewEndDate": "2023-04-09 08:25:38",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1247",
        "InterviewEndDate": "2023-04-09 08:31:24",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "BER",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1248",
        "InterviewEndDate": "2023-04-09 08:38:08",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1249",
        "InterviewEndDate": "2023-04-09 08:42:06",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1250",
        "InterviewEndDate": "2023-04-09 08:46:05",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1251",
        "InterviewEndDate": "2023-04-09 08:53:11",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1252",
        "InterviewEndDate": "2023-04-19 18:14:13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1253",
        "InterviewEndDate": "2023-04-19 18:18:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1254",
        "InterviewEndDate": "2023-04-19 18:22:08",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1255",
        "InterviewEndDate": "2023-04-19 18:29:46",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1256",
        "InterviewEndDate": "2023-04-19 18:36:53",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1257",
        "InterviewEndDate": "2023-04-19 18:41:58",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1258",
        "InterviewEndDate": "2023-04-19 18:46:49",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1259",
        "InterviewEndDate": "2023-04-19 18:52:08",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1260",
        "InterviewEndDate": "2023-04-19 18:59:29",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1261",
        "InterviewEndDate": "2023-04-19 19:03:59",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "BSL",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1262",
        "InterviewEndDate": "2023-04-19 19:08:17",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "BSL",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1263",
        "InterviewEndDate": "2023-04-19 19:12:02",
        "InterviewState": "Complete",
        "Flight": "EZY - EasyJet",
        "Dest": "BSL",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "1264",
        "InterviewEndDate": "2023-04-19 19:16:22",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "STR",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1265",
        "InterviewEndDate": "2023-04-19 19:23:47",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "STR",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1266",
        "InterviewEndDate": "2023-04-19 19:31:58",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "STR",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1267",
        "InterviewEndDate": "2023-04-20 16:07:06",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "1268",
        "InterviewEndDate": "2023-04-20 16:10:09",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "1269",
        "InterviewEndDate": "2023-04-20 16:15:19",
        "InterviewState": "Complete",
        "Flight": "A3 - Aegean",
        "Dest": "ATH",
        "AirlineCode": "A3"
    },
    {
        "InterviewId": "1270",
        "InterviewEndDate": "2023-04-20 16:19:21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MRS",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1271",
        "InterviewEndDate": "2023-04-20 16:23:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MRS",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1272",
        "InterviewEndDate": "2023-04-20 16:26:15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MRS",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1273",
        "InterviewEndDate": "2023-04-20 19:16:20",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1274",
        "InterviewEndDate": "2023-04-20 19:19:44",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1275",
        "InterviewEndDate": "2023-04-20 19:22:56",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1276",
        "InterviewEndDate": "2023-04-20 19:26:06",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1277",
        "InterviewEndDate": "2023-04-21 18:24:35",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BOH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1278",
        "InterviewEndDate": "2023-04-21 18:28:42",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BOH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1279",
        "InterviewEndDate": "2023-04-21 18:31:56",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BOH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1280",
        "InterviewEndDate": "2023-04-21 18:36:07",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BOH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1281",
        "InterviewEndDate": "2023-04-21 18:40:15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BOH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1282",
        "InterviewEndDate": "2023-04-21 18:47:06",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1283",
        "InterviewEndDate": "2023-04-21 18:51:33",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1284",
        "InterviewEndDate": "2023-04-21 18:57:30",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1285",
        "InterviewEndDate": "2023-04-21 19:03:19",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1286",
        "InterviewEndDate": "2023-04-21 19:07:04",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1287",
        "InterviewEndDate": "2023-04-21 20:18:05",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1288",
        "InterviewEndDate": "2023-04-21 20:21:57",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1289",
        "InterviewEndDate": "2023-04-21 20:25:40",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1290",
        "InterviewEndDate": "2023-04-21 20:29:29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1291",
        "InterviewEndDate": "2023-04-21 20:33:02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1292",
        "InterviewEndDate": "2023-04-24 08:30:32",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1293",
        "InterviewEndDate": "2023-04-24 08:35:13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1294",
        "InterviewEndDate": "2023-04-24 08:40:32",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1295",
        "InterviewEndDate": "2023-04-24 08:46:17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1296",
        "InterviewEndDate": "2023-04-24 09:00:27",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1297",
        "InterviewEndDate": "2023-04-24 09:05:10",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1298",
        "InterviewEndDate": "2023-04-24 09:10:34",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1299",
        "InterviewEndDate": "2023-04-24 09:15:06",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1300",
        "InterviewEndDate": "2023-04-24 09:19:23",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1301",
        "InterviewEndDate": "2023-04-24 09:24:26",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1302",
        "InterviewEndDate": "2023-04-24 09:32:51",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1303",
        "InterviewEndDate": "2023-04-24 09:39:07",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1304",
        "InterviewEndDate": "2023-04-24 09:44:10",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1305",
        "InterviewEndDate": "2023-04-24 09:49:04",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1306",
        "InterviewEndDate": "2023-04-24 09:53:30",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1307",
        "InterviewEndDate": "2023-04-25 09:06:45",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1308",
        "InterviewEndDate": "2023-04-25 09:12:20",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1309",
        "InterviewEndDate": "2023-04-25 09:19:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1310",
        "InterviewEndDate": "2023-04-25 09:24:57",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1311",
        "InterviewEndDate": "2023-04-25 09:30:11",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1312",
        "InterviewEndDate": "2023-04-25 09:36:02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MRS",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1313",
        "InterviewEndDate": "2023-04-25 09:41:01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MRS",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1314",
        "InterviewEndDate": "2023-04-25 09:45:05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1315",
        "InterviewEndDate": "2023-04-25 09:48:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1316",
        "InterviewEndDate": "2023-04-25 09:50:49",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BRI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1317",
        "InterviewEndDate": "2023-04-25 10:51:19",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1318",
        "InterviewEndDate": "2023-04-25 10:53:43",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "Ltn",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1319",
        "InterviewEndDate": "2023-04-25 10:57:31",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1320",
        "InterviewEndDate": "2023-04-25 11:01:51",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1321",
        "InterviewEndDate": "2023-04-25 11:07:04",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1322",
        "InterviewEndDate": "2023-04-25 11:12:09",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1323",
        "InterviewEndDate": "2023-05-02 13:30:07",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1324",
        "InterviewEndDate": "2023-05-02 13:34:21",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1325",
        "InterviewEndDate": "2023-05-02 13:39:38",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1326",
        "InterviewEndDate": "2023-05-02 13:45:08",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1327",
        "InterviewEndDate": "2023-05-02 14:00:12",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1328",
        "InterviewEndDate": "2023-05-02 14:04:02",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1329",
        "InterviewEndDate": "2023-05-02 14:08:20",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1330",
        "InterviewEndDate": "2023-05-02 14:12:21",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1331",
        "InterviewEndDate": "2023-05-02 14:16:24",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1332",
        "InterviewEndDate": "2023-05-02 14:20:21",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1333",
        "InterviewEndDate": "2023-05-03 09:34:27",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1334",
        "InterviewEndDate": "2023-05-03 09:38:26",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1335",
        "InterviewEndDate": "2023-05-03 09:42:33",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1336",
        "InterviewEndDate": "2023-05-03 09:46:10",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "CLJ",
        "AirlineCode": ""
    },
    {
        "InterviewId": "1337",
        "InterviewEndDate": "2023-05-03 09:49:10",
        "InterviewState": "Complete",
        "Flight": "",
        "Dest": "CLJ",
        "AirlineCode": ""
    },
    {
        "InterviewId": "1338",
        "InterviewEndDate": "2023-05-03 10:00:36",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1339",
        "InterviewEndDate": "2023-05-03 10:04:26",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1340",
        "InterviewEndDate": "2023-05-03 10:09:17",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1341",
        "InterviewEndDate": "2023-05-03 10:16:01",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1342",
        "InterviewEndDate": "2023-05-03 10:21:40",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1343",
        "InterviewEndDate": "2023-05-03 10:28:32",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1344",
        "InterviewEndDate": "2023-05-03 10:35:07",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1345",
        "InterviewEndDate": "2023-05-03 10:40:06",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1346",
        "InterviewEndDate": "2023-05-03 10:44:46",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "LTN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1347",
        "InterviewEndDate": "2023-05-06 07:56:24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1348",
        "InterviewEndDate": "2023-05-06 08:01:12",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1349",
        "InterviewEndDate": "2023-05-06 08:06:15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1350",
        "InterviewEndDate": "2023-05-06 08:10:50",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1351",
        "InterviewEndDate": "2023-05-06 08:15:13",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAD",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1352",
        "InterviewEndDate": "2023-05-06 08:29:45",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1353",
        "InterviewEndDate": "2023-05-06 08:34:17",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1354",
        "InterviewEndDate": "2023-05-06 08:39:04",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1355",
        "InterviewEndDate": "2023-05-06 08:44:22",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1356",
        "InterviewEndDate": "2023-05-06 08:49:23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1357",
        "InterviewEndDate": "2023-05-11 06:27:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1358",
        "InterviewEndDate": "2023-05-11 06:31:08",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1359",
        "InterviewEndDate": "2023-05-11 06:35:14",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1360",
        "InterviewEndDate": "2023-05-11 06:39:02",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1361",
        "InterviewEndDate": "2023-05-11 06:43:16",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1362",
        "InterviewEndDate": "2023-05-11 06:50:33",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1363",
        "InterviewEndDate": "2023-05-11 06:55:05",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1364",
        "InterviewEndDate": "2023-05-11 06:59:04",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1365",
        "InterviewEndDate": "2023-05-11 07:03:12",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1366",
        "InterviewEndDate": "2023-05-11 07:07:16",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1367",
        "InterviewEndDate": "2023-05-11 07:11:49",
        "InterviewState": "Complete",
        "Flight": "RO - Tarom",
        "Dest": "OTP",
        "AirlineCode": "RO"
    },
    {
        "InterviewId": "1368",
        "InterviewEndDate": "2023-05-11 07:16:08",
        "InterviewState": "Complete",
        "Flight": "RO - Tarom",
        "Dest": "OTP",
        "AirlineCode": "RO"
    },
    {
        "InterviewId": "1369",
        "InterviewEndDate": "2023-05-11 07:20:02",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1370",
        "InterviewEndDate": "2023-05-11 07:24:01",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1371",
        "InterviewEndDate": "2023-05-11 07:28:07",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    }
]    

 `;