let interview_data_arr_raw = `[
    {
        "InterviewId": "5394",
        "InterviewEndDate": "2023-04-01 06:39:36",
        "InterviewState": "Complete",
        "Airline": "TG - Thai Airways",
        "Dest": "BKK",
        "download_time": "09-04-2023 13:08:38"
    },
    {
        "InterviewId": "5396",
        "InterviewEndDate": "2023-04-01 06:35:13",
        "InterviewState": "Complete",
        "Airline": "TG - Thai Airways",
        "Dest": "BKK"
    },
    {
        "InterviewId": "5397",
        "InterviewEndDate": "2023-04-01 06:43:31",
        "InterviewState": "Complete",
        "Airline": "AC - Air Canada",
        "Dest": "YYZ"
    },
    {
        "InterviewId": "5398",
        "InterviewEndDate": "2023-04-01 06:50:34",
        "InterviewState": "Complete",
        "Airline": "TG - Thai Airways",
        "Dest": "BKK"
    },
    {
        "InterviewId": "5399",
        "InterviewEndDate": "2023-04-01 06:47:02",
        "InterviewState": "Complete",
        "Airline": "SN - Brussels Airlines",
        "Dest": "BRU"
    },
    {
        "InterviewId": "5400",
        "InterviewEndDate": "2023-04-01 06:58:12",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "TBS"
    },
    {
        "InterviewId": "5401",
        "InterviewEndDate": "2023-04-01 07:04:37",
        "InterviewState": "Complete",
        "Airline": "TG - Thai Airways",
        "Dest": "BKK"
    },
    {
        "InterviewId": "5403",
        "InterviewEndDate": "2023-04-01 07:18:09",
        "InterviewState": "Complete",
        "Airline": "AC - Air Canada",
        "Dest": "YYZ"
    },
    {
        "InterviewId": "5405",
        "InterviewEndDate": "2023-04-01 07:36:04",
        "InterviewState": "Complete",
        "Airline": "A3 - Aegean Airlines",
        "Dest": "SKG"
    },
    {
        "InterviewId": "5409",
        "InterviewEndDate": "2023-04-01 08:04:27",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "OSL"
    },
    {
        "InterviewId": "5410",
        "InterviewEndDate": "2023-04-01 08:11:11",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "TRN"
    },
    {
        "InterviewId": "5411",
        "InterviewEndDate": "2023-04-01 08:16:03",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "BOS"
    },
    {
        "InterviewId": "5413",
        "InterviewEndDate": "2023-04-01 12:15:11",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "JFK"
    },
    {
        "InterviewId": "5414",
        "InterviewEndDate": "2023-04-01 12:42:59",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "LYS"
    },
    {
        "InterviewId": "5415",
        "InterviewEndDate": "2023-04-01 12:21:41",
        "InterviewState": "Complete",
        "Airline": "TP - TAP Air Portugal",
        "Dest": "LIS"
    },
    {
        "InterviewId": "5416",
        "InterviewEndDate": "2023-04-01 12:36:23",
        "InterviewState": "Complete",
        "Airline": "LG - Luxair",
        "Dest": "LUX"
    },
    {
        "InterviewId": "5417",
        "InterviewEndDate": "2023-04-01 12:53:32",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "CTA"
    },
    {
        "InterviewId": "5418",
        "InterviewEndDate": "2023-04-01 13:07:07",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "HEL"
    },
    {
        "InterviewId": "5420",
        "InterviewEndDate": "2023-04-01 13:07:04",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "CPH"
    },
    {
        "InterviewId": "5421",
        "InterviewEndDate": "2023-04-01 13:18:13",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "FRA"
    },
    {
        "InterviewId": "5422",
        "InterviewEndDate": "2023-04-01 13:24:00",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "CLJ"
    },
    {
        "InterviewId": "5423",
        "InterviewEndDate": "2023-04-01 13:35:50",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "HAM"
    },
    {
        "InterviewId": "5424",
        "InterviewEndDate": "2023-04-01 13:42:45",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "HAM"
    },
    {
        "InterviewId": "5427",
        "InterviewEndDate": "2023-04-01 13:57:19",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "BUD"
    },
    {
        "InterviewId": "5429",
        "InterviewEndDate": "2023-04-02 05:36:21",
        "InterviewState": "Complete",
        "Airline": "QR - Qatar Airways",
        "Dest": "DOH"
    },
    {
        "InterviewId": "5430",
        "InterviewEndDate": "2023-04-02 05:40:38",
        "InterviewState": "Complete",
        "Airline": "QR - Qatar Airways",
        "Dest": "DOH"
    },
    {
        "InterviewId": "5431",
        "InterviewEndDate": "2023-04-02 05:43:31",
        "InterviewState": "Complete",
        "Airline": "QR - Qatar Airways",
        "Dest": "DOH"
    },
    {
        "InterviewId": "5432",
        "InterviewEndDate": "2023-04-02 05:49:33",
        "InterviewState": "Complete",
        "Airline": "QR - Qatar Airways",
        "Dest": "DOH"
    },
    {
        "InterviewId": "5433",
        "InterviewEndDate": "2023-04-02 06:47:32",
        "InterviewState": "Complete",
        "Airline": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS"
    },
    {
        "InterviewId": "5434",
        "InterviewEndDate": "2023-04-02 06:51:08",
        "InterviewState": "Complete",
        "Airline": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS"
    },
    {
        "InterviewId": "5435",
        "InterviewEndDate": "2023-04-02 07:02:36",
        "InterviewState": "Complete",
        "Airline": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS"
    },
    {
        "InterviewId": "5436",
        "InterviewEndDate": "2023-04-02 07:06:42",
        "InterviewState": "Complete",
        "Airline": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS"
    },
    {
        "InterviewId": "5437",
        "InterviewEndDate": "2023-04-02 07:09:45",
        "InterviewState": "Complete",
        "Airline": "KL - KLM Royal Dutch Airlines",
        "Dest": "AMS"
    },
    {
        "InterviewId": "5438",
        "InterviewEndDate": "2023-04-02 07:12:46",
        "InterviewState": "Complete",
        "Airline": "VY - Vueling",
        "Dest": "BCN"
    },
    {
        "InterviewId": "5439",
        "InterviewEndDate": "2023-04-02 07:19:57",
        "InterviewState": "Complete",
        "Airline": "VY - Vueling",
        "Dest": "BCN"
    },
    {
        "InterviewId": "5440",
        "InterviewEndDate": "2023-04-02 07:22:03",
        "InterviewState": "Complete",
        "Airline": "VY - Vueling",
        "Dest": "BCN"
    },
    {
        "InterviewId": "5441",
        "InterviewEndDate": "2023-04-02 07:31:24",
        "InterviewState": "Complete",
        "Airline": "VY - Vueling",
        "Dest": "BCN"
    },
    {
        "InterviewId": "5442",
        "InterviewEndDate": "2023-04-02 08:06:19",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5443",
        "InterviewEndDate": "2023-04-02 08:08:46",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5444",
        "InterviewEndDate": "2023-04-02 08:11:17",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5445",
        "InterviewEndDate": "2023-04-02 08:17:20",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5446",
        "InterviewEndDate": "2023-04-02 08:20:20",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5447",
        "InterviewEndDate": "2023-04-02 08:25:09",
        "InterviewState": "Complete",
        "Airline": "XQ - Sun Express",
        "Dest": "ADB"
    },
    {
        "InterviewId": "5448",
        "InterviewEndDate": "2023-04-02 09:09:29",
        "InterviewState": "Complete",
        "Airline": "AY - Finnair",
        "Dest": "HEL"
    },
    {
        "InterviewId": "5449",
        "InterviewEndDate": "2023-04-02 09:12:59",
        "InterviewState": "Complete",
        "Airline": "AY - Finnair",
        "Dest": "HEL"
    },
    {
        "InterviewId": "5450",
        "InterviewEndDate": "2023-04-02 09:15:38",
        "InterviewState": "Complete",
        "Airline": "EW - Eurowings",
        "Dest": "PMI"
    },
    {
        "InterviewId": "5451",
        "InterviewEndDate": "2023-04-02 14:10:41",
        "InterviewState": "Complete",
        "Airline": "SN - Brussels Airlines",
        "Dest": "BRU"
    },
    {
        "InterviewId": "5452",
        "InterviewEndDate": "2023-04-02 14:13:57",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "DUS"
    },
    {
        "InterviewId": "5453",
        "InterviewEndDate": "2023-04-02 14:26:38",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "SVQ"
    },
    {
        "InterviewId": "5455",
        "InterviewEndDate": "2023-04-02 14:53:47",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "BCN"
    },
    {
        "InterviewId": "5457",
        "InterviewEndDate": "2023-04-02 15:23:13",
        "InterviewState": "Complete",
        "Airline": "LH - Lufthansa",
        "Dest": "LHR"
    },
    {
        "InterviewId": "5459",
        "InterviewEndDate": "2023-04-08 11:33:38",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5460",
        "InterviewEndDate": "2023-04-08 13:26:47",
        "InterviewState": "Complete",
        "Airline": "EZY",
        "Dest": "EDI"
    },
    {
        "InterviewId": "5461",
        "InterviewEndDate": "2023-04-08 13:25:17",
        "InterviewState": "Complete",
        "Airline": "EZY",
        "Dest": "EDI"
    },
    {
        "InterviewId": "5462",
        "InterviewEndDate": "2023-04-08 11:55:26",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5463",
        "InterviewEndDate": "2023-04-08 11:44:14",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5464",
        "InterviewEndDate": "2023-04-08 11:59:59",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5465",
        "InterviewEndDate": "2023-04-08 12:10:46",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5466",
        "InterviewEndDate": "2023-04-08 12:06:46",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5467",
        "InterviewEndDate": "2023-04-08 12:13:47",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5468",
        "InterviewEndDate": "2023-04-08 12:15:54",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5469",
        "InterviewEndDate": "2023-04-08 12:26:38",
        "InterviewState": "Complete",
        "Airline": "TK - Turkish Airlines",
        "Dest": "IST"
    },
    {
        "InterviewId": "5470",
        "InterviewEndDate": "2023-04-08 12:25:53",
        "InterviewState": "Complete",
        "Airline": "EK - Emirates",
        "Dest": "DXB"
    },
    {
        "InterviewId": "5471",
        "InterviewEndDate": "2023-04-08 12:28:52",
        "InterviewState": "Complete",
        "Airline": "TK - Turkish Airlines",
        "Dest": "IST"
    },
    {
        "InterviewId": "5472",
        "InterviewEndDate": "2023-04-08 13:32:17",
        "InterviewState": "Complete",
        "Airline": "EZY",
        "Dest": "EDI"
    },
    {
        "InterviewId": "5473",
        "InterviewEndDate": "2023-04-08 13:39:44",
        "InterviewState": "Complete",
        "Airline": "EZY",
        "Dest": "EDI"
    },
    {
        "InterviewId": "5474",
        "InterviewEndDate": "2023-04-08 13:43:43",
        "InterviewState": "Complete",
        "Airline": "EZY",
        "Dest": "EDI"
    },
    {
        "InterviewId": "5475",
        "InterviewEndDate": "2023-04-08 14:02:31",
        "InterviewState": "Complete",
        "Airline": "PC - Pegasus Airlines",
        "Dest": "SAW"
    },
    {
        "InterviewId": "5476",
        "InterviewEndDate": "2023-04-08 13:49:49",
        "InterviewState": "Complete",
        "Airline": "PC - Pegasus Airlines",
        "Dest": "SAW"
    },
    {
        "InterviewId": "5477",
        "InterviewEndDate": "2023-04-08 13:54:09",
        "InterviewState": "Complete",
        "Airline": "PC - Pegasus Airlines",
        "Dest": "SAW"
    },
    {
        "InterviewId": "5478",
        "InterviewEndDate": "2023-04-08 14:12:20",
        "InterviewState": "Complete",
        "Airline": "BA - British Airways",
        "Dest": "LHR"
    },
    {
        "InterviewId": "5479",
        "InterviewEndDate": "2023-04-08 14:06:45",
        "InterviewState": "Complete",
        "Airline": "BA - British Airways",
        "Dest": "LHR"
    }
]    

 `;