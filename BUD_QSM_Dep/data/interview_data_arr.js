let interview_data_arr_raw = `[
    {
        "InterviewId": "1223",
        "InterviewEndDate": "2023-04-08 12:48:18",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "download_time": "12-07-2023 22:08:37"
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
    },
    {
        "InterviewId": "1372",
        "InterviewEndDate": "2023-05-13 05:22:16",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1373",
        "InterviewEndDate": "2023-05-13 05:26:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1374",
        "InterviewEndDate": "2023-05-13 05:30:02",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1375",
        "InterviewEndDate": "2023-05-13 05:35:37",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1376",
        "InterviewEndDate": "2023-05-13 05:41:18",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "POZ",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1377",
        "InterviewEndDate": "2023-05-14 17:45:34",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1378",
        "InterviewEndDate": "2023-05-14 17:49:05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1379",
        "InterviewEndDate": "2023-05-14 17:52:26",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1380",
        "InterviewEndDate": "2023-05-14 17:58:04",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1381",
        "InterviewEndDate": "2023-05-14 18:03:31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1382",
        "InterviewEndDate": "2023-05-14 18:08:26",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1383",
        "InterviewEndDate": "2023-05-14 18:13:43",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1384",
        "InterviewEndDate": "2023-05-14 18:19:11",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1385",
        "InterviewEndDate": "2023-05-14 18:23:06",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1386",
        "InterviewEndDate": "2023-05-14 18:27:01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1387",
        "InterviewEndDate": "2023-05-14 18:31:24",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1388",
        "InterviewEndDate": "2023-05-14 18:38:01",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1389",
        "InterviewEndDate": "2023-05-14 18:43:06",
        "InterviewState": "Complete",
        "Flight": "BA - British Airways",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "1390",
        "InterviewEndDate": "2023-05-14 18:52:05",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1391",
        "InterviewEndDate": "2023-05-14 18:56:10",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1392",
        "InterviewEndDate": "2023-05-15 16:18:05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1393",
        "InterviewEndDate": "2023-05-15 16:23:03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1394",
        "InterviewEndDate": "2023-05-15 16:26:23",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1395",
        "InterviewEndDate": "2023-05-15 16:30:25",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1396",
        "InterviewEndDate": "2023-05-15 16:34:50",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1397",
        "InterviewEndDate": "2023-05-15 16:40:34",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "1398",
        "InterviewEndDate": "2023-05-15 16:45:32",
        "InterviewState": "Complete",
        "Flight": "AY - Finnair",
        "Dest": "HEL",
        "AirlineCode": "AY"
    },
    {
        "InterviewId": "1399",
        "InterviewEndDate": "2023-05-26 12:59:06",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1400",
        "InterviewEndDate": "2023-05-26 13:03:05",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "SAW",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1401",
        "InterviewEndDate": "2023-05-26 13:33:28",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1402",
        "InterviewEndDate": "2023-05-26 13:37:21",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1403",
        "InterviewEndDate": "2023-05-26 13:42:33",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1404",
        "InterviewEndDate": "2023-05-26 13:46:20",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1405",
        "InterviewEndDate": "2023-05-26 13:49:45",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1406",
        "InterviewEndDate": "2023-05-26 13:54:07",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1407",
        "InterviewEndDate": "2023-05-26 13:58:07",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1408",
        "InterviewEndDate": "2023-05-26 14:02:03",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1409",
        "InterviewEndDate": "2023-05-26 14:06:21",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1410",
        "InterviewEndDate": "2023-05-26 14:09:08",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "GVA",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1411",
        "InterviewEndDate": "2023-05-26 14:12:24",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "GVA",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1412",
        "InterviewEndDate": "2023-05-26 14:17:57",
        "InterviewState": "Complete",
        "Flight": "EZY - EasyJet",
        "Dest": "GVA",
        "AirlineCode": "EZY"
    },
    {
        "InterviewId": "1413",
        "InterviewEndDate": "2023-05-26 14:22:12",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "GVA",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1414",
        "InterviewEndDate": "2023-05-26 14:28:13",
        "InterviewState": "Complete",
        "Flight": "EZS - Easyjet Switzerland",
        "Dest": "GVA",
        "AirlineCode": "EZS"
    },
    {
        "InterviewId": "1415",
        "InterviewEndDate": "2023-05-29 12:32:02",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1416",
        "InterviewEndDate": "2023-05-29 12:36:21",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1417",
        "InterviewEndDate": "2023-05-29 12:40:17",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1418",
        "InterviewEndDate": "2023-05-29 12:44:35",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1419",
        "InterviewEndDate": "2023-05-29 12:48:23",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1420",
        "InterviewEndDate": "2023-05-29 12:52:13",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1421",
        "InterviewEndDate": "2023-05-29 12:55:31",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1422",
        "InterviewEndDate": "2023-05-29 13:00:48",
        "InterviewState": "Complete",
        "Flight": "EK - Emirates",
        "Dest": "DXB",
        "AirlineCode": "EK"
    },
    {
        "InterviewId": "1423",
        "InterviewEndDate": "2023-06-02 09:46:52",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "1424",
        "InterviewEndDate": "2023-06-02 09:50:09",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "1425",
        "InterviewEndDate": "2023-06-02 09:54:03",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "1426",
        "InterviewEndDate": "2023-06-02 09:57:05",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "1427",
        "InterviewEndDate": "2023-06-02 09:59:46",
        "InterviewState": "Complete",
        "Flight": "AF - Air France",
        "Dest": "CDG",
        "AirlineCode": "AF"
    },
    {
        "InterviewId": "1428",
        "InterviewEndDate": "2023-06-02 11:39:40",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "1429",
        "InterviewEndDate": "2023-06-02 11:45:27",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "1430",
        "InterviewEndDate": "2023-06-02 11:49:05",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1431",
        "InterviewEndDate": "2023-06-02 11:53:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1432",
        "InterviewEndDate": "2023-06-02 11:58:04",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1433",
        "InterviewEndDate": "2023-06-02 12:02:25",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MAN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1434",
        "InterviewEndDate": "2023-06-02 12:06:48",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1435",
        "InterviewEndDate": "2023-06-02 12:11:06",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1436",
        "InterviewEndDate": "2023-06-02 12:16:57",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1437",
        "InterviewEndDate": "2023-06-02 12:22:26",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "TLV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1438",
        "InterviewEndDate": "2023-06-10 08:26:09",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "Preveza",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1439",
        "InterviewEndDate": "2023-06-10 08:30:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "Preveza",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1440",
        "InterviewEndDate": "2023-06-10 08:33:43",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1441",
        "InterviewEndDate": "2023-06-10 08:37:27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1442",
        "InterviewEndDate": "2023-06-10 08:41:32",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BCN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1443",
        "InterviewEndDate": "2023-06-10 09:45:07",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "1444",
        "InterviewEndDate": "2023-06-10 09:49:04",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "1445",
        "InterviewEndDate": "2023-06-10 09:54:22",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "1446",
        "InterviewEndDate": "2023-06-10 09:58:18",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "1447",
        "InterviewEndDate": "2023-06-10 10:03:20",
        "InterviewState": "Complete",
        "Flight": "XQ - Sunexpress",
        "Dest": "AYT",
        "AirlineCode": "XQ"
    },
    {
        "InterviewId": "1448",
        "InterviewEndDate": "2023-06-11 05:57:11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ATH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1449",
        "InterviewEndDate": "2023-06-11 06:01:43",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ATH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1450",
        "InterviewEndDate": "2023-06-11 06:08:29",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ATH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1451",
        "InterviewEndDate": "2023-06-11 06:13:24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ATH",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1452",
        "InterviewEndDate": "2023-06-11 06:18:36",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1453",
        "InterviewEndDate": "2023-06-11 06:23:28",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1454",
        "InterviewEndDate": "2023-06-11 06:30:22",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1455",
        "InterviewEndDate": "2023-06-11 06:38:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1456",
        "InterviewEndDate": "2023-06-11 06:42:15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1457",
        "InterviewEndDate": "2023-06-11 06:46:09",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1458",
        "InterviewEndDate": "2023-06-11 06:51:42",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1459",
        "InterviewEndDate": "2023-06-11 06:56:01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1460",
        "InterviewEndDate": "2023-06-11 07:06:32",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1461",
        "InterviewEndDate": "2023-06-11 07:12:43",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1462",
        "InterviewEndDate": "2023-06-11 07:18:04",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "1463",
        "InterviewEndDate": "2023-06-13 13:13:04",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "ALC",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1464",
        "InterviewEndDate": "2023-06-13 13:17:14",
        "InterviewState": "Complete",
        "Flight": "W6",
        "Dest": "ALC",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1465",
        "InterviewEndDate": "2023-06-13 13:21:36",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "ALC",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1466",
        "InterviewEndDate": "2023-06-13 13:26:26",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1467",
        "InterviewEndDate": "2023-06-13 13:30:11",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1468",
        "InterviewEndDate": "2023-06-13 13:36:07",
        "InterviewState": "Complete",
        "Flight": "IB - Iberia",
        "Dest": "MAD",
        "AirlineCode": "IB"
    },
    {
        "InterviewId": "1469",
        "InterviewEndDate": "2023-06-13 13:40:09",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1470",
        "InterviewEndDate": "2023-06-13 13:43:31",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1471",
        "InterviewEndDate": "2023-06-13 13:47:23",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1472",
        "InterviewEndDate": "2023-06-13 13:53:11",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "NAP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1473",
        "InterviewEndDate": "2023-06-14 18:07:07",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1474",
        "InterviewEndDate": "2023-06-14 18:10:00",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1475",
        "InterviewEndDate": "2023-06-14 18:14:01",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1476",
        "InterviewEndDate": "2023-06-14 18:18:10",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1477",
        "InterviewEndDate": "2023-06-14 18:21:12",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1478",
        "InterviewEndDate": "2023-06-14 18:24:31",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1479",
        "InterviewEndDate": "2023-06-14 18:28:02",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1480",
        "InterviewEndDate": "2023-06-14 18:30:59",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1481",
        "InterviewEndDate": "2023-06-14 18:35:01",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1482",
        "InterviewEndDate": "2023-06-14 18:39:01",
        "InterviewState": "Complete",
        "Flight": "EW - Eurowings",
        "Dest": "CGN",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "1483",
        "InterviewEndDate": "2023-06-15 19:59:13",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1484",
        "InterviewEndDate": "2023-06-15 20:03:47",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1485",
        "InterviewEndDate": "2023-06-15 20:09:28",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1486",
        "InterviewEndDate": "2023-06-15 20:16:47",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1487",
        "InterviewEndDate": "2023-06-15 20:21:33",
        "InterviewState": "Complete",
        "Flight": "FZ - FLY DUBAI",
        "Dest": "DXB",
        "AirlineCode": "FZ"
    },
    {
        "InterviewId": "1488",
        "InterviewEndDate": "2023-06-17 09:13:00",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1489",
        "InterviewEndDate": "2023-06-17 09:16:00",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1490",
        "InterviewEndDate": "2023-06-17 09:19:38",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1491",
        "InterviewEndDate": "2023-06-17 09:23:00",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1492",
        "InterviewEndDate": "2023-06-17 09:28:59",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1493",
        "InterviewEndDate": "2023-06-20 10:52:15",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1494",
        "InterviewEndDate": "2023-06-20 10:56:15",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1495",
        "InterviewEndDate": "2023-06-20 11:00:13",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "IST",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1496",
        "InterviewEndDate": "2023-06-20 11:04:29",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "1497",
        "InterviewEndDate": "2023-06-20 11:09:56",
        "InterviewState": "Complete",
        "Flight": "PC - Pegasus Airlines",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "1498",
        "InterviewEndDate": "2023-06-21 13:40:17",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1499",
        "InterviewEndDate": "2023-06-21 13:44:33",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1500",
        "InterviewEndDate": "2023-06-21 13:49:12",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1501",
        "InterviewEndDate": "2023-06-21 13:55:39",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1502",
        "InterviewEndDate": "2023-06-21 13:59:13",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1503",
        "InterviewEndDate": "2023-06-22 19:08:35",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "1504",
        "InterviewEndDate": "2023-06-22 19:13:30",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "1505",
        "InterviewEndDate": "2023-06-22 19:17:30",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "1506",
        "InterviewEndDate": "2023-06-22 19:22:24",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "1507",
        "InterviewEndDate": "2023-06-22 19:26:28",
        "InterviewState": "Complete",
        "Flight": "LX - Swiss International",
        "Dest": "ZRH",
        "AirlineCode": "LX"
    },
    {
        "InterviewId": "1508",
        "InterviewEndDate": "2023-06-22 20:54:09",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1509",
        "InterviewEndDate": "2023-06-22 20:57:37",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1510",
        "InterviewEndDate": "2023-06-22 21:01:23",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1511",
        "InterviewEndDate": "2023-06-22 21:05:18",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1512",
        "InterviewEndDate": "2023-06-22 21:11:10",
        "InterviewState": "Complete",
        "Flight": "LY - El-Al",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1513",
        "InterviewEndDate": "2023-06-26 14:54:16",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "TGD",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1514",
        "InterviewEndDate": "2023-06-26 18:47:45",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1515",
        "InterviewEndDate": "2023-06-26 18:53:38",
        "InterviewState": "Complete",
        "Flight": "TK - Turkish Airlines",
        "Dest": "IST",
        "AirlineCode": "TK"
    },
    {
        "InterviewId": "1516",
        "InterviewEndDate": "2023-06-26 18:57:37",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1517",
        "InterviewEndDate": "2023-06-26 19:02:30",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1518",
        "InterviewEndDate": "2023-06-26 19:07:22",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1519",
        "InterviewEndDate": "2023-06-26 19:10:44",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1520",
        "InterviewEndDate": "2023-06-26 19:14:05",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1521",
        "InterviewEndDate": "2023-06-26 19:18:39",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1522",
        "InterviewEndDate": "2023-06-26 19:22:18",
        "InterviewState": "Complete",
        "Flight": "LS - Jet2.com",
        "Dest": "MAN",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "1523",
        "InterviewEndDate": "2023-07-05 15:05:33",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "LGW",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1524",
        "InterviewEndDate": "2023-07-05 15:11:06",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "LGW",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1525",
        "InterviewEndDate": "2023-07-05 15:18:03",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "LGW",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1526",
        "InterviewEndDate": "2023-07-05 15:23:54",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "LGW",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1527",
        "InterviewEndDate": "2023-07-05 15:28:21",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "LGW",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1528",
        "InterviewEndDate": "2023-07-05 15:38:04",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "1529",
        "InterviewEndDate": "2023-07-05 15:44:22",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "1530",
        "InterviewEndDate": "2023-07-05 15:49:01",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "1531",
        "InterviewEndDate": "2023-07-05 15:57:05",
        "InterviewState": "Complete",
        "Flight": "SN - Brussels Airlines",
        "Dest": "BRU",
        "AirlineCode": "SN"
    },
    {
        "InterviewId": "1532",
        "InterviewEndDate": "2023-07-06 07:11:44",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PFO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1533",
        "InterviewEndDate": "2023-07-06 07:15:43",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PFO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1534",
        "InterviewEndDate": "2023-07-06 07:20:07",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PFO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1535",
        "InterviewEndDate": "2023-07-06 07:25:25",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PFO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1536",
        "InterviewEndDate": "2023-07-06 07:29:31",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PFO",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1537",
        "InterviewEndDate": "2023-07-06 07:34:02",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1538",
        "InterviewEndDate": "2023-07-06 07:38:34",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1539",
        "InterviewEndDate": "2023-07-06 07:44:06",
        "InterviewState": "Complete",
        "Flight": "JU - Air Serbia",
        "Dest": "BEG",
        "AirlineCode": "JU"
    },
    {
        "InterviewId": "1540",
        "InterviewEndDate": "2023-07-06 07:48:07",
        "InterviewState": "Complete",
        "Flight": "LY - El Al Israel Airlines",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1541",
        "InterviewEndDate": "2023-07-06 07:54:14",
        "InterviewState": "Complete",
        "Flight": "LY - El Al Israel Airlines",
        "Dest": "TLV",
        "AirlineCode": "LY"
    },
    {
        "InterviewId": "1542",
        "InterviewEndDate": "2023-07-06 07:59:18",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "TGM",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1543",
        "InterviewEndDate": "2023-07-06 08:04:19",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizz Air",
        "Dest": "TGM",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "1544",
        "InterviewEndDate": "2023-07-06 08:28:34",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "1545",
        "InterviewEndDate": "2023-07-06 08:33:22",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "EDI",
        "AirlineCode": "FR"
    }
]    

 `;