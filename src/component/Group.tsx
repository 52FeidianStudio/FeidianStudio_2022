
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
                            <div className="group-imge"><img src={`../assets/groups/imge${index+1}.png`} alt="" /></div>
                        </div>
                        
                        <div className="group-description">{group.introduction}</div>
                        <div className="decoration"></div>
                    </div>

                </div>
            ))}
        </div> 
    )
}
export default GroupDisplay;