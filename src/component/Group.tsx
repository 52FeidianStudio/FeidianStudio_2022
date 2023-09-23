
import { useEffect, useState } from "react";
import { GROUP_INFO } from "../type/homeType";
import apis from "../api/group/group"
import '../style/group.less'
const GroupDisplay: React.FC = function () {
    const [groups, setGroups] = useState<GROUP_INFO[]>([]);
    let group = document.getElementsByClassName("group")
    useEffect(() => {
        apis.Groups()
            .then(response => {
                const data = Object.values(response.data.data)
                setGroups(data as GROUP_INFO[])
                console.log(data);

            })


    }, [])
    return (
        <div className='group-display'>
            <div className="group_title">
                <div className="group_title_bottom">Groups</div>
                <p>我们的队伍</p>
            </div>
            {groups.map((group, index) => (
                <div className="group-item-container" key={index}>
                    <div className="group-item">
                        <div className="group-header">
                            <div className="group-name">{group.departmentName}</div>
                            <div className="group-imge"><img src={`/assets/groups/imge${index+1}.png`} alt="" /></div>
                        </div>
                        
                        <div className="group-description">{group.introduction}</div>
                        <div className="decoration"></div>
                    </div>

                </div>
            ))}
        </div>
        // <div className="group-description">
        //     <div className="group-item-container">
        //         <div className="group-item">
        //             <div className="group-description">
        //                 负责网页和应用界面的设计与开发,注重用户体验和界面美观,使用HTML、CSS、JavaScript等技术创造吸引人的前端界面
        //             </div>
        //             <div className="group-name">
        //                 前端
        //             </div>
        //             <div className="decoration"></div>
        //         </div>
        //         <div className="group-item">
        //             <div className="group-name">
        //                 后端
        //             </div>
        //         </div>
        //         <div className="group-item">
        //             <div className="group-name">
        //                 ios
        //             </div>
        //         </div>
        //         <div className="group-item">
        //             <div className="group-name">
        //                 信息安全
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default GroupDisplay;