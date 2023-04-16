let interview_data_arr_raw = `[
    {
        "InterviewId": "2077",
        "InterviewEndDate": "2023-04-03 11:26:50",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL",
        "download_time": "16-04-2023 11:39:33"
    },
    {
        "InterviewId": "2740",
        "InterviewEndDate": "2023-04-03 11:25:01",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2741",
        "InterviewEndDate": "2023-04-03 11:28:15",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2743",
        "InterviewEndDate": "2023-04-03 11:25:00",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2746",
        "InterviewEndDate": "2023-04-03 11:29:11",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "MLA",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2756",
        "InterviewEndDate": "2023-04-03 12:04:05",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2759",
        "InterviewEndDate": "2023-04-03 12:02:03",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2763",
        "InterviewEndDate": "2023-04-03 12:05:56",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2765",
        "InterviewEndDate": "2023-04-03 12:02:06",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2787",
        "InterviewEndDate": "2023-04-04 16:45:21",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2792",
        "InterviewEndDate": "2023-04-04 16:42:55",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2793",
        "InterviewEndDate": "2023-04-04 16:40:35",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2794",
        "InterviewEndDate": "2023-04-04 16:42:31",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2795",
        "InterviewEndDate": "2023-04-04 16:44:00",
        "InterviewState": "Complete",
        "Flight": "LH - Lufthansa",
        "Dest": "FRA",
        "AirlineCode": "LH"
    },
    {
        "InterviewId": "2797",
        "InterviewEndDate": "2023-04-04 17:31:26",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2798",
        "InterviewEndDate": "2023-04-04 17:31:14",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2799",
        "InterviewEndDate": "2023-04-04 17:33:43",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2800",
        "InterviewEndDate": "2023-04-04 17:29:45",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2801",
        "InterviewEndDate": "2023-04-04 17:28:55",
        "InterviewState": "Complete",
        "Flight": "DK - Sunclass Airlines",
        "Dest": "TFS",
        "AirlineCode": "DK"
    },
    {
        "InterviewId": "2803",
        "InterviewEndDate": "2023-04-05 08:49:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2804",
        "InterviewEndDate": "2023-04-05 08:50:32",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2808",
        "InterviewEndDate": "2023-04-05 08:49:58",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "DUB",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2809",
        "InterviewEndDate": "2023-04-05 09:20:27",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2810",
        "InterviewEndDate": "2023-04-05 09:22:39",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "SPC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2811",
        "InterviewEndDate": "2023-04-05 09:24:18",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2812",
        "InterviewEndDate": "2023-04-05 09:18:30",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2813",
        "InterviewEndDate": "2023-04-05 09:18:38",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2814",
        "InterviewEndDate": "2023-04-05 09:18:07",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "PMI",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2815",
        "InterviewEndDate": "2023-04-05 09:41:52",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2816",
        "InterviewEndDate": "2023-04-05 09:39:58",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2817",
        "InterviewEndDate": "2023-04-05 09:41:22",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2818",
        "InterviewEndDate": "2023-04-05 09:38:25",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2819",
        "InterviewEndDate": "2023-04-05 09:37:34",
        "InterviewState": "Complete",
        "Flight": "Klm",
        "Dest": "AMS",
        "AirlineCode": "Klm"
    },
    {
        "InterviewId": "2820",
        "InterviewEndDate": "2023-04-05 09:36:42",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2823",
        "InterviewEndDate": "2023-04-05 13:11:34",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2824",
        "InterviewEndDate": "2023-04-05 13:09:47",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2825",
        "InterviewEndDate": "2023-04-05 16:19:18",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "ALC",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2829",
        "InterviewEndDate": "2023-04-05 19:15:50",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2830",
        "InterviewEndDate": "2023-04-05 19:11:36",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2832",
        "InterviewEndDate": "2023-04-05 19:10:42",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2835",
        "InterviewEndDate": "2023-04-05 19:09:38",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2836",
        "InterviewEndDate": "2023-04-05 19:10:05",
        "InterviewState": "Complete",
        "Flight": "DY - Norwegian Air Schuttle",
        "Dest": "OSL",
        "AirlineCode": "DY"
    },
    {
        "InterviewId": "2847",
        "InterviewEndDate": "2023-04-05 19:38:18",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "KRK",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2852",
        "InterviewEndDate": "2023-04-13 10:33:24",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BGY",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2853",
        "InterviewEndDate": "2023-04-13 10:32:06",
        "InterviewState": "Complete",
        "Flight": "FR - Ryanair",
        "Dest": "BJV",
        "AirlineCode": "FR"
    },
    {
        "InterviewId": "2862",
        "InterviewEndDate": "2023-04-13 11:53:24",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2863",
        "InterviewEndDate": "2023-04-13 11:52:07",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2864",
        "InterviewEndDate": "2023-04-13 11:50:17",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2865",
        "InterviewEndDate": "2023-04-13 11:49:11",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2866",
        "InterviewEndDate": "2023-04-13 11:52:09",
        "InterviewState": "Complete",
        "Flight": "KL - KLM",
        "Dest": "AMS",
        "AirlineCode": "KL"
    },
    {
        "InterviewId": "2867",
        "InterviewEndDate": "2023-04-14 12:49:51",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2868",
        "InterviewEndDate": "2023-04-14 12:49:34",
        "InterviewState": "Complete",
        "Flight": "Bt",
        "Dest": "RIX",
        "AirlineCode": "Bt"
    },
    {
        "InterviewId": "2869",
        "InterviewEndDate": "2023-04-14 12:50:39",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2870",
        "InterviewEndDate": "2023-04-14 12:47:05",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    },
    {
        "InterviewId": "2871",
        "InterviewEndDate": "2023-04-14 12:48:39",
        "InterviewState": "Complete",
        "Flight": "BT - Air Baltic",
        "Dest": "RIX",
        "AirlineCode": "BT"
    }
]    

 `;