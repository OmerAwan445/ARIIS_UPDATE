import { AnalysisAgainstThresholds, RailProfile } from "@/DummyData"
import MeasurementImage from '/public/DummyData/Images/Measuremnet.png'

export const highpriority = [
    {
        id: '1',
        text: "G00002"
    },
    {
        id: '2',
        text: "G00003"
    },
    {
        id: '3',
        text: "G00004"
    },
    {
        id: '4',
        text: "G00008"
    },
    {
        id: '5',
        text: "G00009"
    },
    {
        id: '6',
        text: "G00010"
    },
    {
        id: '7',
        text: "G00011"
    },
    {
        id: '8',
        text: "G00012"
    },
    {
        id: '9',
        text: "G00015"
    },
    {
        id: '10',
        text: "G00027"
    }
]

export const midpriority = [
    {
        id: '1',
        text: "G00005"
    },
    {
        id: '2',
        text: "G00007"
    },
    {
        id: '3',
        text: "G00013"
    },
    {
        id: '4',
        text: "G00014"
    },
    {
        id: '5',
        text: "G00017"
    },
    {
        id: '6',
        text: "G00019"
    },
    {
        id: '7',
        text: "G00020"
    },
    {
        id: '8',
        text: "G00021"
    },
    {
        id: '9',
        text: "G00022"
    },
    {
        id: '10',
        text: "G00023"
    }
]
export const greenpriority = [
    {
        id: '1',
        text: "G00001"
    },
    {
        id: '2',
        text: "G00006"
    },
    {
        id: '3',
        text: "G00016"
    },
    {
        id: '4',
        text: "G00018"
    },
    {
        id: '5',
        text: "G00024"
    },
    {
        id: '6',
        text: "G00025"
    },
    {
        id: '7',
        text: "G00026"
    },
    {
        id: '8',
        text: "G00028"
    },
    {
        id: '9',
        text: "G00029"
    },
    {
        id: '10',
        text: "G00030"
    }
]

 export const columnDetail = ["Element","Chainage","Easting","Northing","Bearing","Note"]
 export const rowDetail = [["Straight","88+238.283","4829.2829","36583.2839","257'23","TBA"]];
//Table columns and rows
/* export const columnDetail = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "element",
        headerName: 'Element',
        width: 150,
    },
    {
        field: "chainage",
        headerName: 'Chainage',
        width: 150,

    },
    {
        field: "easting",
        headerName: 'Easting',
        width: 150,

    },
    {
        field: "northing",
        headerName: 'Northing',
        width: 150
    },
    {
        field: "bearing",
        headerName: 'Bearing',
        width: 150
    },
    {
        field: "note",
        headerName: 'Note',
        width: 150
    },
]
export const rowDetail = [
    {
        id: '1',
        element: "Straight",
        chainage: "88+238.283",
        easting: "4829.2829",
        northing: "36583.2839",
        bearing: `257'23"`,
        note: "TBA"
    },
] */
//Ariis
export const ColArisDetail = ["Date","Run"];
export const rowArisDetail = [
    ["11/03/2023", "Run # 384 385 87"],
    ["11/03/2023", "Run # 384 385 87"],
]

/* export const ColArisDetail = [
    {
        field: "date",
        headerName: 'Date',
        width: 150
    },
    {
        field: "run",
        headerName: 'Run',
        width: 150
    }
]
export const rowArisDetail = [
    {
        id: '1',
        date: "11/03/2023",
        run: "Run # 384 385 87"
    },
    {
        id: '2',
        date: "9/04/2023",
        run: "Run # 674 239 23"
    }
    */
export const inspection =[
    {
        id: 1,
        title: "Track Guage",
        offCanvasName: "trackGuage",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/laserProfile-img.png',
                title: "Left Rail Profile & Right Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:2,
        title:"Flangeway",
        offCanvasName:"flangeway",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/laserProfile-img2.png',
                title: "Left Rail Profile"
            },
            {
                imageUrl: '/DummyData/Images/laserProfile-img2.png',
                title: "Right Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:3,
        title:"Horizontal Alignment",
        offCanvasName:"horizontal-alignment",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: false,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/horizontal-alignment.png',
                title: ""
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:4,
        title:"Vertical Alignment & Longitudinal Elevation",
        offCanvasName:"vertical-alignment",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: false,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/vertical-alignment.png',
                title: ""
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:5,
        title:"Free Wheel Clearance",
        offCanvasName:"freeWheel",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/laserProfile-img3.png',
                title: "Left Rail Profile"
              },
            {
                imageUrl: '/DummyData/Images/laserProfile-img3.png',
                title: "Right Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:6,
        title:"Rail Profile Wear",
        offCanvasName:"railProfileWear",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/Left Rail Profile.jpeg',
                title: "Left Rail Profile"
              },
            {
                imageUrl: '/DummyData/Images/Right Rail Profile.jpeg',
                title: "Right Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:7,
        title:"Third Rail Position",
        offCanvasName:"thirdRailPos",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/Third-rail.png',
                title: "Left Rail Profile"
            },
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:8,
        title:"Third Rail Wear",
        offCanvasName:"railWear",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: true,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/Third-rail.png',
                title: "Left Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:9,
        title:"Cross Level",
        offCanvasName:"crosslevel",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: false,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/cross-level.png',
                title: ""
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:10,
        title:"Twist - Long & Short",
        offCanvasName:"twistLongShort",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: false,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/twist-long-short.png',
                title: ""
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:11,
        title:"Super Elevation",
        offCanvasName:"superElevation",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isLaserProfile: false,
        profilesImages: [
            {
                imageUrl: '/DummyData/Images/cross-level.png',
                title: ""
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds,
        isVideoImageModal: false,
    },
    {
        id:12,
        title:"Panoramic Video of Tracks",
        offCanvasName:"panoramicVideo",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isVideoImageModal: true,
        videoUrl: "https://www.youtube.com/watch?v=ZK-rNEhJIDs",
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        //imageUrls: ['/DummyData/Images/rail-img1.png','/DummyData/Images/rail-img2.png']
    },
    {
        id:13,
        title:"Rail Image",
        offCanvasName:"railImage",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        isVideoImageModal: true,
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds,
        imageUrls: ['/DummyData/Images/rail-img1.png','/DummyData/Images/rail-img2.png']
    },
]