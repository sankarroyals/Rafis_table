import React, { useEffect, useState } from 'react'
import './table.scss'
import Moment from "moment";
import "moment-timezone";
const TableRafi = () => {

  const [data, setData] = useState([])

  // Call the API Here
  useEffect(() => {
    setData([{
      "urn": "thirdeye:event:holiday:1315",
      "score": 0.19102270238490518,
      "label": "Happy celebration",
      "type": "event",
      "link": "https://www.google.com/search?q=Happy celebration",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662576523258,
      "end": 1662662923258,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1325",
      "score": 0.05345747664138436,
      "label": "Happy rememberance",
      "type": "event",
      "link": "https://www.google.com/search?q=Happy rememberance",
      "relatedEntities": [],
      "attributes": {},
      "start": 1663129056754,
      "end": 1663215456754,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1314",
      "score": 0.049439889823205525,
      "label": "Unity celebration",
      "type": "event",
      "link": "https://www.google.com/search?q=Unity celebration",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662533347443,
      "end": 1662619747443,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1313",
      "score": 0.04696190168437829,
      "label": "Funky rememberance",
      "type": "event",
      "link": "https://www.google.com/search?q=Funky rememberance",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662530273693,
      "end": 1662616673693,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1324",
      "score": 0.02579134712769684,
      "label": "Second day",
      "type": "event",
      "link": "https://www.google.com/search?q=Second day",
      "relatedEntities": [],
      "attributes": {},
      "start": 1663056818303,
      "end": 1663143218303,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1323",
      "score": 0.024349299137213697,
      "label": "Glorious celebration",
      "type": "event",
      "link": "https://www.google.com/search?q=Glorious celebration",
      "relatedEntities": [],
      "attributes": {},
      "start": 1663048551802,
      "end": 1663134951802,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1322",
      "score": 0.02235408441256214,
      "label": "Unity rememberance",
      "type": "event",
      "link": "https://www.google.com/search?q=Unity rememberance",
      "relatedEntities": [],
      "attributes": {},
      "start": 1663035355605,
      "end": 1663121755605,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1321",
      "score": 0.012126005486269714,
      "label": "First day",
      "type": "event",
      "link": "https://www.google.com/search?q=First day",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662899517403,
      "end": 1662985917403,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1320",
      "score": 0.01160097738363357,
      "label": "Unity occurrence",
      "type": "event",
      "link": "https://www.google.com/search?q=Unity occurrence",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662886081319,
      "end": 1662972481319,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1319",
      "score": 0.010790151332531838,
      "label": "Unity day",
      "type": "event",
      "link": "https://www.google.com/search?q=Unity day",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662862762418,
      "end": 1662949162418,
      "eventType": "holiday",
      "details": ""
    }, {
      "urn": "thirdeye:event:holiday:1318",
      "score": 0.00995322531529205,
      "label": "Unity rememberance",
      "type": "event",
      "link": "https://www.google.com/search?q=Unity rememberance",
      "relatedEntities": [],
      "attributes": {},
      "start": 1662834708198,
      "end": 1662921108198,
      "eventType": "holiday",
      "details": ""
    }])
  }, [])

  const [checkedL, setChecked] = useState([])
  const [unChecked, setUnChecked] = useState([])
  const [searchV, setSearchV] = useState('')
  const [searchC, setSearchC] = useState([])
  const [checkedC, setCheckedC] = useState([])
  const [sort, setSort] = useState(false)
  useEffect(() => {
    setSearchC([...data])
  }, [data])

  useEffect(() => {
    setCheckedC([...checkedL])
  }, [checkedL])

  const checkAdd = (id) => {

    // document.getElementById(id).checked = true

    setChecked(prev => [...prev, ...searchC.filter((d, i) => i === id)])
    setSearchC(searchC.filter((d, j) => j !== id))
  }




  const removeAdd = (id) => {
    setChecked(checkedL.filter((d, j) => j !== id))
    setSearchC(prev => [...prev, ...checkedL.filter((d, i) => i === id)])
  }
  useEffect(() => {
    //  console.log(checkedL)
  }, [checkedL])

  const searching = (e) => {
    setSearchV(e.target.value)
    setSearchC(data.filter(d => d.label.toLowerCase().includes(e.target.value.toLowerCase())))
    setCheckedC(checkedL.filter(d => d.label.toLowerCase().includes(e.target.value.toLowerCase())))
  }


  const sortHandler = (e) => {
    if (sort === false) {
      setSort(true)
      setSearchC(searchC.sort((a, b) => {
        return a.end - b.end;
      }))
      setCheckedC(checkedC.sort((a, b) => {
        return a.end - b.end;
      }))
    }
    else {
      setSort(false)
      setSearchC(searchC.sort((a, b) => {
        return b.end - a.end;
      }))
      setCheckedC(checkedC.sort((a, b) => {
        return b.end - a.end;
      }))
    }

    //   console.log(searchC.sort((a, b) => {
    //     return a.end - b.end;
    // }))
  }









  const moment = Moment;

  const [timestamps, setTimeStamps] = useState([])
  const values = [1.0, 5.0e7, 5.0e7];


 const maxTim = (t) =>{
  const maxTime = moment(t)
  .tz("America/Los_Angeles")
  .format("ddd, MMM D YYYY, h:mm a z");
 


 }



  useEffect(() => {
    const p = []
    data.map((d) => {
      p.push(d.end)
    })
    setTimeStamps([...p])
  }, [data])


  // useEffect(() => {
  //   timestamps.map((t, index) => {
  //     const maxTime = moment(t)
  //       .tz("America/Los_Angeles")
  //       .format("ddd, MMM D YYYY, h:mm a z");
       

  //   })

  // }, [timestamps])
  

  return (
    <div style={{ padding: "20px", color: "gray" }}>
      <div style={{ borderRight: "1px solid gray", borderLeft: "1px solid gray", width: "700px" }}>
        <div className='heads'>
          <div style={{ display: "flex" }} className="head2">
            <div className='checkbox bo' style={{ width: "25px" }}></div>
            <div className='head bo '
              onMouseOver={e => {
                // console.log(e.target.children[0].style.display="inline-block")
              }}
            >Event Name <span style={{ marginLeft: "170px", fontSize: "16px", cursor: "pointer" }} onClick={sortHandler}>{sort ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}</span></div>
          </div>

          <div className='head bo'>Start Time</div>
          <div className='head bo'>Duration</div>
        </div>

        <div className='searchHead'>
          <div style={{ display: "flex" }} className="searchhead2">
            <div className='checkbox bo' style={{ width: "25px" }}></div>
            <div className='searchhead bo ' >
              <input type="text" value={searchV} onChange={searching} style={{ width: "95%", padding: "5px" }} />
            </div>
          </div>

          <div className='searchhead bo' style={{ borderRight: "1px solid gray", width: "256px" }}></div>
          <div className='searchhead bo'></div>
        </div>

        {checkedC.map((s, index) => (
          <div onClick={e => removeAdd(index)}>
            <div className='bottomHeads' style={{ cursor: "pointer" }} >
              <div style={{ display: "flex" }} className="head2">
                <div className='checkbox bo' style={{ width: "25px" }} >
                  <input type="checkbox" checked id={index} />
                </div>
                <div className='head bo label'>{s.label}</div>
              </div>

              <div className='head bo' >
                <div>{s.end}</div>
              </div>
              <div className='head bo'>1 day</div>
            </div>
          </div>
        ))}

        {searchC.map((s, index) => (
          <div onClick={e => checkAdd(index)}>
            <div className='bottomHeads' style={{ cursor: "pointer" }} >
              <div style={{ display: "flex" }} className="head2" >
                <div className='checkbox bo' style={{ width: "25px" }}  >
                  <input type="checkbox" id={index} />
                </div>
                <div className='head bo label' >{s.label}</div>
              </div>

              <div className='head bo' >{s.end}</div>
              <div className='head bo'>1 day</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableRafi


