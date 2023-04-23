let interview_data_arr_raw = `[
    {
        "InterviewId": "1223",
        "InterviewEndDate": "2023-04-08 12:48:18",
        "InterviewState": "Complete",
        "Flight": "W6 - Wizzair",
        "Dest": "TLV",
        "AirlineCode": "W6",
        "download_time": "23-04-2023 18:34:59"
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
    }
]    

 `;