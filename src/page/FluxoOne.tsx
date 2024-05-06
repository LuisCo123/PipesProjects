import { SidebarMenu } from "../components/SidebarMenu"
import valvOpen from '../assets/ValvOpen.gif'
import stopped from '../assets/StoppedNoArrows.png'
import boilerValvOpen from '../assets/BoilerValvOn.gif'
import boilerOpen from '../assets/BoilerOn.png'
import baqOn from '../assets/BAQOn.png'
import baqValvOn from '../assets/BaqValvOn.gif'
import allOn from '../assets/AllOn.gif'
import boilerBaq from '../assets/BoilerPumpOn.png'
import { useEffect, useState } from "react"

type st = {
    st: string,
}
export const FluxoOne = () => {

    const [BAQ, setBAQ] = useState(false);
    const [valvulaSolenoide, setValvulaSolenoide] = useState(false);
    const [boiler, setBoiler] = useState(false);
    const [sensorNv, setSensorNv] = useState(90);
    const [sTs, setSTs] = useState<st[]>([{ st: "150" }, { st: "50" }, { st: "30" }, { st: "100" }, { st: "75" }, { st: "80" }]);


    const getTemperatures = () => {
        //Function to update values of temperatutre sensores
    }
    const getNvSensors = () => {
        //Function to update values of nv sensores
    }
    const getData = () => {
        //function to get state of all instruments

        //request get BAQ_OUT_SCADA -> state of BAQ

        //request get VALV_CIRC -> state of VALVE OF CIRCULATION

        //request get Boiler -> state of BOILER

        //request get ST-1...ST-6 -> temperature of sensors 

        //request get SN-1 -> nivel of Sn sensor

    }

    const changeBAQ = () => {

        //request to write in baq
        //then set baq
        setBAQ(!BAQ)
    }
    const changeVavl = () => {

        //request to write in valv
        //then set baq
        setValvulaSolenoide(!valvulaSolenoide);
    }
    const changeBoiler = () => {

        //request to write in boiler
        //then set boiler
        setBoiler(!boiler);
    }

    setInterval(() => {
        getTemperatures();
        getNvSensors();
    }, 5000);
    const imageReturn = () => {
        if (valvulaSolenoide && boiler && BAQ)
            return (<img src={allOn} />);
        if (valvulaSolenoide && boiler)
            return (<img src={boilerValvOpen} />);
        if (BAQ && valvulaSolenoide)
            return (<img src={baqValvOn} />);
        if (BAQ && boiler)
            return (<img src={boilerBaq} />);
        else if (valvulaSolenoide)
            return (<img src={valvOpen} />);
        else if (boiler)
            return (<img src={boilerOpen} />);
        else if (BAQ)
            return (<img src={baqOn} />);
        return (<img src={stopped} />);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <SidebarMenu>
            <div className="flex flex-col m-5 items-center lg:flex-row ">
                <div className="w-[90%] lg:w-1/6 lg:flex-col lg:mr-2 flex-row   text-center mb-5">
                    <h1 className="font-bold  mt-2 mb-5">Controles</h1>
                    <div className="divider  h-0.5 mt-0" />
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="">Bomba de Água quente</span>
                            <input type="checkbox" className="toggle toggle-primary" checked={BAQ} onChange={changeBAQ} />
                        </label>
                    </div>
                    <div className="divider" />
                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="">Válvula Solenoide</span>
                            <input type="checkbox" className="toggle toggle-secondary" checked={valvulaSolenoide} onChange={changeVavl} />
                        </label>
                        <div className="divider" />
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="">Boiler</span>
                                <input type="checkbox" className="toggle toggle-accent" checked={boiler} onChange={changeBoiler} />
                            </label>
                            <div className="divider" />
                            <div className="mt-3 flex items-center justify-center flex-col">
                                <span className="">Nível Boiler</span>
                                <progress className=" mb-3 progress progress-info w-[90%] mt-5" value={sensorNv} max="100" />
                                <span className="font-bold text-blue-400">{sensorNv} LT</span>
                            </div>
                            <div>
                                <div className="mt-3">
                                    <span>Sensores de temperatura</span>
                                </div>
                                <div className="mt-3 flex items-center justify-center flex-col">
                                    {sTs ?
                                        sTs.map((e, index) => {
                                            return (
                                                <div className="mt-2">
                                                    <span className="font-bold">ST-{index + 1}: </span>
                                                    <span className="text-red-600">{e.st}ºC</span>
                                                </div>)
                                        })
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 flex items-center justify-center">
                    {imageReturn()}
                </div>
            </div>
        </SidebarMenu>
    )
}