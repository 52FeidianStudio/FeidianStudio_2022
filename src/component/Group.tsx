
import { useEffect, useState } from "react";
import { GROUP_INFO } from "../type/homeType";
import apis from "../api/group/group"
import '../style/group.css' 
const GroupDisplay: React.FC = function(){
    const [groups, setGroups] = useState<GROUP_INFO[]>([]); 
    let group = document.getElementsByClassName("group")
    useEffect(() => {
        apis.Groups()
        .then(response => {
            const data =Object.values(response.data.data)
            setGroups(data as GROUP_INFO[])
            console.log(data);
            
        })
            

        },[])
        return(
            <div className='group-display'>
                <div className="Group_title"><div className="Group_title_bottom">Groups</div></div>
 
                {groups.map((group,index) => (
                    <div key={index} className='group-display-item'>
                       <div className="group-display-des">
                       <h3>{group.departmentName}</h3>
                        <p>{group.introduction}</p> 
                        <div className="group-display-imge"><img src={`/src/assets/groups/imge${index+1}.png`} alt="" /></div>
                       </div>
                    </div>
                ))}
            </div>
        )
    }
    export default GroupDisplay;