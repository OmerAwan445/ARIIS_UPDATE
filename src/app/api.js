import { AnalysisAgainstThresholds, RailProfile } from "@/DummyData"
import MeasurementImage from '/public/DummyData/Images/Measuremnet.png'

export const highpriority = [
    {
        id: '1',
        text: "Section # 182 120 68"
    },
    {
        id: '2',
        text: "Section # 182 120 68"
    },
    {
        id: '3',
        text: "Section # 182 120 68"
    },
    {
        id: '4',
        text: "Section # 182 120 68"
    },
    {
        id: '5',
        text: "Section # 182 120 68"
    },
    {
        id: '6',
        text: "Section # 182 120 68"
    },
    {
        id: '7',
        text: "Section # 182 120 68"
    },
    {
        id: '8',
        text: "Section # 182 120 68"
    },
    {
        id: '9',
        text: "Section # 182 120 68"
    },
    {
        id: '10',
        text: "Section # 182 120 68"
    }, {
        id: '11',
        text: "Section # 182 120 68"
    },
    {
        id: '12',
        text: "Section # 182 120 68"
    }, {
        id: '13',
        text: "Section # 182 120 68"
    },
    {
        id: '14',
        text: "Section # 182 120 68"
    }, {
        id: '15',
        text: "Section # 182 120 68"
    },
    {
        id: '16',
        text: "Section # 182 120 68"
    }, {
        id: '17',
        text: "Section # 182 120 68"
    },
    {
        id: '18',
        text: "Section # 182 120 68"
    },
]
//Table columns and rows
export const columnDetail = [
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
]
//Ariis
export const ColArisDetail = [
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
    },
]
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
        laserProfiles: [
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
        laserProfiles: [
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
        title:"Free Wheel Clearance",
        offCanvasName:"freeWheel",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:4,
        title:"Rail Profile Wear",
        offCanvasName:"railProfileWear",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
            {
                imageUrl: '/DummyData/Images/Left Rail Profile.png',
                title: "Left Rail Profile"
              },
            {
                imageUrl: '/DummyData/Images/Right Rail Profile.png',
                title: "Right Rail Profile"
            }
        ],
        MeasurementImage: MeasurementImage,
        analysisTableData: AnalysisAgainstThresholds
        ,isVideoImageModal: false,
    },
    {
        id:5,
        title:"Third Rail Position",
        offCanvasName:"thirdRailPos",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:6,
        title:"Third Rail Wear",
        offCanvasName:"railWear",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:7,
        title:"Cross Level",
        offCanvasName:"crosslevel",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:8,
        title:"Twist - Long & Short",
        offCanvasName:"twistLongShort",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:9,
        title:"Super Elevation",
        offCanvasName:"superElevation",
        runNum: RailProfile.runNum,
        sectionNum: RailProfile.sectionNum,
        kmRangeStrt: RailProfile.kmRangeStrt,
        kmRangeEnd: RailProfile.kmRangeEnd,
        dateTime: RailProfile.dateTime,
        laserProfiles: [
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
        id:10,
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
        id:11,
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
    }
]