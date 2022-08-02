import {
	IoShirtSharp, IoTicketOutline, IoBalloonOutline, IoPeopleOutline,
	IoMusicalNotesOutline, IoBookOutline, IoWatchOutline, IoFootballOutline,
	IoPhonePortraitOutline, IoCameraOutline, IoCarOutline, IoColorPaletteOutline,
	IoConstructOutline
} from 'react-icons/io5'
import { IoMdMicrophone, IoLogoGameControllerA } from 'react-icons/io'
import { AiOutlineTool, AiFillAppstore } from 'react-icons/ai'
import { FaTractor, FaDog, FaGuitar, FaCouch } from 'react-icons/fa'
import { CgSandClock, CgCardSpades } from 'react-icons/cg'

import { GiHealthNormal, GiOfficeChair, GiCook, GiWashingMachine } from 'react-icons/gi'
import { RiArchiveDrawerLine, RiSteering2Fill } from 'react-icons/ri'

import { FiMonitor } from 'react-icons/fi'
import { TbBabyCarriage } from 'react-icons/tb'

const styles = 'text-blue-500 card-icon mx-auto mb-3 text-6xl'

export const categoryIcons = {
	MLA1512: <FaTractor className={styles} />,
	MLA1071: <FaDog className={styles} />,
	MLA1367: <CgSandClock className={styles} />,
	MLA1000: <IoMdMicrophone className={styles} />,
	MLA1953: <AiFillAppstore className={styles} />,
	MLA9304: <IoBalloonOutline className={styles} />,
	MLA1540: <IoPeopleOutline className={styles} />,
	MLA409431: <GiHealthNormal className={styles} />,
	MLA1430: <IoShirtSharp className={styles} />,
	MLA1459: <RiArchiveDrawerLine className={styles} />,
	MLA1168: <IoMusicalNotesOutline className={styles} />,
	MLA3025: <IoBookOutline className={styles} />,
	MLA1132: <CgCardSpades className={styles} />,
	MLA3937: <IoWatchOutline className={styles} />,
	MLA1182: <FaGuitar className={styles} />,
	MLA1499: <GiOfficeChair className={styles} />,
	MLA1574: <FaCouch className={styles} />,
	MLA407134: <AiOutlineTool className={styles} />,
	MLA2547: <IoTicketOutline className={styles} />,
	MLA1276: <IoFootballOutline className={styles} />,
	MLA1500: <IoConstructOutline className={styles} />,
	MLA1144: <IoLogoGameControllerA className={styles} />,
	MLA1648: <FiMonitor className={styles} />,
	MLA1051: <IoPhonePortraitOutline className={styles} />,
	MLA1039: <IoCameraOutline className={styles} />,
	MLA1246: <IoPeopleOutline className={styles} />,
	MLA1384: <TbBabyCarriage className={styles} />,
	MLA1743: <IoCarOutline className={styles} />,
	MLA1368: <IoColorPaletteOutline className={styles} />,
	MLA1403: <GiCook className={styles} />,
	MLA5725: <RiSteering2Fill className={styles} />,
	MLA5726: <GiWashingMachine className={styles} />
}
