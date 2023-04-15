let interview_data_raw = `[
    {
        "InterviewId": "7700",
        "InterviewEndDate": "2023-04-04 12:29:55",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6",
        "download_time": "15-04-2023 05:21:33"
    },
    {
        "InterviewId": "7701",
        "InterviewEndDate": "2023-04-04 12:30:41",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7702",
        "InterviewEndDate": "2023-04-04 12:29:52",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7703",
        "InterviewEndDate": "2023-04-04 12:31:52",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7704",
        "InterviewEndDate": "2023-04-04 12:34:53",
        "InterviewState": "Complete",
        "Flight": "W6 2335",
        "Dest": "MXP",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7706",
        "InterviewEndDate": "2023-04-06 15:21:16",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7707",
        "InterviewEndDate": "2023-04-06 14:40:18",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7708",
        "InterviewEndDate": "2023-04-06 14:46:00",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7710",
        "InterviewEndDate": "2023-04-06 14:45:41",
        "InterviewState": "Complete",
        "Flight": "W6 2375",
        "Dest": "BCN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7711",
        "InterviewEndDate": "2023-04-07 10:26:04",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7712",
        "InterviewEndDate": "2023-04-07 10:31:01",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7713",
        "InterviewEndDate": "2023-04-07 10:28:59",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7714",
        "InterviewEndDate": "2023-04-07 10:32:51",
        "InterviewState": "Complete",
        "Flight": "PC  332",
        "Dest": "SAW",
        "AirlineCode": "PC"
    },
    {
        "InterviewId": "7716",
        "InterviewEndDate": "2023-04-07 12:40:04",
        "InterviewState": "Complete",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7717",
        "InterviewEndDate": "2023-04-07 12:38:18",
        "InterviewState": "Complete",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7718",
        "InterviewEndDate": "2023-04-07 12:45:29",
        "InterviewState": "Complete",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7719",
        "InterviewEndDate": "2023-04-07 12:50:04",
        "InterviewState": "Complete",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7720",
        "InterviewEndDate": "2023-04-07 12:45:17",
        "InterviewState": "Complete",
        "Flight": "W6 2327",
        "Dest": "TLV",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7721",
        "InterviewEndDate": "2023-04-07 14:16:42",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "7722",
        "InterviewEndDate": "2023-04-07 14:18:10",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "7723",
        "InterviewEndDate": "2023-04-07 14:18:28",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "7724",
        "InterviewEndDate": "2023-04-07 14:22:13",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "7725",
        "InterviewEndDate": "2023-04-07 14:21:01",
        "InterviewState": "Complete",
        "Flight": "KL 1978",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "7729",
        "InterviewEndDate": "2023-04-07 15:02:07",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7730",
        "InterviewEndDate": "2023-04-07 15:03:05",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7731",
        "InterviewEndDate": "2023-04-07 15:04:59",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7732",
        "InterviewEndDate": "2023-04-07 15:17:11",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7733",
        "InterviewEndDate": "2023-04-07 15:20:42",
        "InterviewState": "Complete",
        "Flight": "BA  875",
        "Dest": "LHR",
        "AirlineCode": "BA"
    },
    {
        "InterviewId": "7734",
        "InterviewEndDate": "2023-04-07 15:58:18",
        "InterviewState": "Complete",
        "Flight": "LS 1322",
        "Dest": "BHX",
        "AirlineCode": "LS"
    },
    {
        "InterviewId": "7735",
        "InterviewEndDate": "2023-04-07 16:26:53",
        "InterviewState": "Complete",
        "Flight": "FR 5570",
        "Dest": "SOF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7736",
        "InterviewEndDate": "2023-04-07 16:25:52",
        "InterviewState": "Complete",
        "Flight": "FR 5570",
        "Dest": "SOF",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7737",
        "InterviewEndDate": "2023-04-09 09:28:29",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7738",
        "InterviewEndDate": "2023-04-09 09:40:05",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7739",
        "InterviewEndDate": "2023-04-09 09:38:30",
        "InterviewState": "Complete",
        "Flight": "FR 4255",
        "Dest": "NUE",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7740",
        "InterviewEndDate": "2023-04-09 10:16:33",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7741",
        "InterviewEndDate": "2023-04-09 10:11:36",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7742",
        "InterviewEndDate": "2023-04-09 10:18:35",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7743",
        "InterviewEndDate": "2023-04-09 10:22:57",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7744",
        "InterviewEndDate": "2023-04-09 10:18:23",
        "InterviewState": "Complete",
        "Flight": "FR  197",
        "Dest": "BER",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7745",
        "InterviewEndDate": "2023-04-09 10:55:45",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7746",
        "InterviewEndDate": "2023-04-09 11:07:12",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7747",
        "InterviewEndDate": "2023-04-09 11:09:30",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7748",
        "InterviewEndDate": "2023-04-09 11:08:45",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7749",
        "InterviewEndDate": "2023-04-09 11:11:11",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7750",
        "InterviewEndDate": "2023-04-09 11:14:38",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7752",
        "InterviewEndDate": "2023-04-09 11:13:51",
        "InterviewState": "Complete",
        "Flight": "EZS1218",
        "Dest": "BSL",
        "AirlineCode": "EZS1218"
    },
    {
        "InterviewId": "7753",
        "InterviewEndDate": "2023-04-09 11:48:45",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7754",
        "InterviewEndDate": "2023-04-09 11:47:34",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7755",
        "InterviewEndDate": "2023-04-09 11:47:19",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7756",
        "InterviewEndDate": "2023-04-09 11:48:40",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7757",
        "InterviewEndDate": "2023-04-09 11:49:47",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7758",
        "InterviewEndDate": "2023-04-09 11:53:48",
        "InterviewState": "Complete",
        "Flight": "W6 2273",
        "Dest": "EIN",
        "AirlineCode": "W6"
    },
    {
        "InterviewId": "7759",
        "InterviewEndDate": "2023-04-11 14:45:01",
        "InterviewState": "Complete",
        "Flight": "LH 1679",
        "Dest": "MUC",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "7760",
        "InterviewEndDate": "2023-04-14 08:19:36",
        "InterviewState": "Complete",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7761",
        "InterviewEndDate": "2023-04-14 08:18:53",
        "InterviewState": "Complete",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7762",
        "InterviewEndDate": "2023-04-14 08:19:04",
        "InterviewState": "Complete",
        "Flight": "FR 2515",
        "Dest": "STN",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "7763",
        "InterviewEndDate": "2023-04-14 08:54:54",
        "InterviewState": "Complete",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732"
    },
    {
        "InterviewId": "7764",
        "InterviewEndDate": "2023-04-14 08:55:17",
        "InterviewState": "Complete",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732"
    },
    {
        "InterviewId": "7765",
        "InterviewEndDate": "2023-04-14 08:50:31",
        "InterviewState": "Complete",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732"
    },
    {
        "InterviewId": "7766",
        "InterviewEndDate": "2023-04-14 08:51:22",
        "InterviewState": "Complete",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732"
    },
    {
        "InterviewId": "7767",
        "InterviewEndDate": "2023-04-14 08:51:41",
        "InterviewState": "Complete",
        "Flight": "EZY8732",
        "Dest": "LGW",
        "AirlineCode": "EZY8732"
    }
]    

 `;