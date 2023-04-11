let interview_data_raw = `[
    {
        "InterviewId": "2038",
        "InterviewEndDate": "2023-04-03 06:18:14",
        "InterviewState": "Complete",
        "Flight": "EW  789",
        "Dest": "CGN",
        "AirlineCode": "EW",
        "download_time": "11-04-2023 17:55:47"
    },
    {
        "InterviewId": "2039",
        "InterviewEndDate": "2023-04-03 07:05:48",
        "InterviewState": "Complete",
        "Flight": "FR 7604",
        "Dest": "ARN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2040",
        "InterviewEndDate": "2023-04-03 13:30:36",
        "InterviewState": "Complete",
        "Flight": "LO 2001",
        "Dest": "ICN",
        "AirlineCode": "LO"
    },
    {
        "InterviewId": "2041",
        "InterviewEndDate": "2023-04-03 13:56:43",
        "InterviewState": "Complete",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2042",
        "InterviewEndDate": "2023-04-03 13:56:00",
        "InterviewState": "Complete",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2043",
        "InterviewEndDate": "2023-04-03 13:58:02",
        "InterviewState": "Complete",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2044",
        "InterviewEndDate": "2023-04-03 13:59:35",
        "InterviewState": "Complete",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2045",
        "InterviewEndDate": "2023-04-03 13:53:37",
        "InterviewState": "Complete",
        "Flight": "FR 2517",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2046",
        "InterviewEndDate": "2023-04-04 08:26:59",
        "InterviewState": "Complete",
        "Flight": "W6 2357",
        "Dest": "AUH",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2047",
        "InterviewEndDate": "2023-04-04 09:47:08",
        "InterviewState": "Complete",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2048",
        "InterviewEndDate": "2023-04-04 09:41:02",
        "InterviewState": "Complete",
        "Flight": "FR 4263",
        "Dest": "CRL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2049",
        "InterviewEndDate": "2023-04-04 10:36:11",
        "InterviewState": "Complete",
        "Flight": "FR 4090",
        "Dest": "NAP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2050",
        "InterviewEndDate": "2023-04-04 11:35:59",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2051",
        "InterviewEndDate": "2023-04-04 11:31:34",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2052",
        "InterviewEndDate": "2023-04-04 12:45:28",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2053",
        "InterviewEndDate": "2023-04-04 13:28:09",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2054",
        "InterviewEndDate": "2023-04-04 12:52:31",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2055",
        "InterviewEndDate": "2023-04-04 13:58:57",
        "InterviewState": "Complete",
        "Flight": "FR 4229",
        "Dest": "BVA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2056",
        "InterviewEndDate": "2023-04-06 12:39:06",
        "InterviewState": "Complete",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2057",
        "InterviewEndDate": "2023-04-06 12:41:42",
        "InterviewState": "Complete",
        "Flight": "W6 2341",
        "Dest": "FCO",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2060",
        "InterviewEndDate": "2023-04-07 14:27:29",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2061",
        "InterviewEndDate": "2023-04-06 13:18:52",
        "InterviewState": "Complete",
        "Flight": "FR 2273",
        "Dest": "AGP",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2062",
        "InterviewEndDate": "2023-04-06 15:09:07",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2063",
        "InterviewEndDate": "2023-04-06 14:22:31",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2064",
        "InterviewEndDate": "2023-04-07 09:17:36",
        "InterviewState": "Complete",
        "Flight": "FM  870",
        "Dest": "PVG",
        "AirlineCode": "FM"
    },
    {
        "InterviewId": "2065",
        "InterviewEndDate": "2023-04-07 10:32:40",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "2066",
        "InterviewEndDate": "2023-04-07 10:36:32",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "2067",
        "InterviewEndDate": "2023-04-07 14:29:03",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2068",
        "InterviewEndDate": "2023-04-07 14:30:27",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2069",
        "InterviewEndDate": "2023-04-07 14:29:49",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2070",
        "InterviewEndDate": "2023-04-07 14:29:21",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2071",
        "InterviewEndDate": "2023-04-10 11:08:15",
        "InterviewState": "Complete",
        "Flight": "W6 2263",
        "Dest": "NCE",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2072",
        "InterviewEndDate": "2023-04-07 15:10:14",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2073",
        "InterviewEndDate": "2023-04-07 15:17:29",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "2074",
        "InterviewEndDate": "2023-04-09 09:29:39",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2075",
        "InterviewEndDate": "2023-04-09 09:56:08",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2076",
        "InterviewEndDate": "2023-04-09 09:53:47",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2077",
        "InterviewEndDate": "2023-04-09 10:43:18",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "2078",
        "InterviewEndDate": "2023-04-09 10:38:12",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "2079",
        "InterviewEndDate": "2023-04-10 06:38:48",
        "InterviewState": "Complete",
        "Flight": "EW 7785",
        "Dest": "HAM",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "2080",
        "InterviewEndDate": "2023-04-10 06:55:17",
        "InterviewState": "Complete",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "2081",
        "InterviewEndDate": "2023-04-10 07:23:25",
        "InterviewState": "Complete",
        "Flight": "EW 9785",
        "Dest": "DUS",
        "AirlineCode": "EW"
    },
    {
        "InterviewId": "2082",
        "InterviewEndDate": "2023-04-10 07:55:13",
        "InterviewState": "Complete",
        "Flight": "FR 8745",
        "Dest": "BLL",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2083",
        "InterviewEndDate": "2023-04-10 09:25:24",
        "InterviewState": "Complete",
        "Flight": "W6 2291",
        "Dest": "DTM",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2084",
        "InterviewEndDate": "2023-04-10 11:33:01",
        "InterviewState": "Complete",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2086",
        "InterviewEndDate": "2023-04-10 11:35:02",
        "InterviewState": "Complete",
        "Flight": "FR 6515",
        "Dest": "CIA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2087",
        "InterviewEndDate": "2023-04-10 13:45:34",
        "InterviewState": "Complete",
        "Flight": "W6 2371",
        "Dest": "MAD",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2088",
        "InterviewEndDate": "2023-04-11 10:28:12",
        "InterviewState": "Complete",
        "Flight": "W6 2397",
        "Dest": "FNC",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2089",
        "InterviewEndDate": "2023-04-11 11:31:25",
        "InterviewState": "Complete",
        "Flight": "W6 2409",
        "Dest": "MMX",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2090",
        "InterviewEndDate": "2023-04-11 12:06:27",
        "InterviewState": "Complete",
        "Flight": "D8 3551",
        "Dest": "CPH",
        "AirlineCode": "D8"
    },
    {
        "InterviewId": "2091",
        "InterviewEndDate": "2023-04-11 12:42:20",
        "InterviewState": "Complete",
        "Flight": "W6 2389",
        "Dest": "AGP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "2092",
        "InterviewEndDate": "2023-04-11 14:40:21",
        "InterviewState": "Complete",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2093",
        "InterviewEndDate": "2023-04-11 14:42:27",
        "InterviewState": "Complete",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2094",
        "InterviewEndDate": "2023-04-11 14:45:31",
        "InterviewState": "Complete",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2095",
        "InterviewEndDate": "2023-04-11 14:47:36",
        "InterviewState": "Complete",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH"
    }
]    

 `;