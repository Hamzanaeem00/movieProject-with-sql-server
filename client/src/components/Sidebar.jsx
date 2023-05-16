import React from 'react'

const Sidebar = () => {
  return (
   
    <div className="sidebar">
    <form action="#">
      <div className="sidebar-groups">
        <h3 className="sg-title">categories</h3>
        <input type="checkbox" id="adventure" name="adventure" defaultValue="adventure" />
        <label htmlFor="adventure">Adventure</label><br />
        <input type="checkbox" id="action" name="action" defaultValue="action" />
        <label htmlFor="action">Action</label><br />
        <input type="checkbox" id="animation" name="animation" defaultValue="animation" />
        <label htmlFor="animation">Animation</label><br />
        <input type="checkbox" id="comedy" name="comedy" defaultValue="comedy" />
        <label htmlFor="comedy">Comedy</label><br />
        <input type="checkbox" id="science" name="science" defaultValue="science" />
        <label htmlFor="science">Science Friction</label><br />
        <input type="checkbox" id="thiller" name="thiller" defaultValue="thiller" />
        <label htmlFor="thiller">Thiller</label><br />
        <input type="checkbox" id="history" name="history" defaultValue="history" />
        <label htmlFor="history">History</label><br />
        <input type="checkbox" id="documentary" name="documentary" defaultValue="documentary" />
        <label htmlFor="documentary">Documentary</label><br />
        <input type="checkbox" id="fantasy" name="fantasy" defaultValue="fantasy" />
        <label htmlFor="fantasy">Fantasy</label><br />
      </div>
      <div className="sidebar-groups">
        <h3 className="sg-title">Language</h3>
        <input type="checkbox" id="english" name="english" defaultValue="english" />
        <label htmlFor="adventure">English</label><br />
        <input type="checkbox" id="urdu" name="urdu" defaultValue="urdu" />
        <label htmlFor="adventure">Urdu</label><br />
      </div>
      <div className="sidebar-groups">
        <h3 className="sg-title">Time</h3>
        <input type="radio" id="morning" name="time" defaultValue="morning" />
        <label htmlFor="morning">Morning</label><br />
        <input type="radio" id="night" name="time" defaultValue="night" />
        <label htmlFor="night">Night</label><br />
      </div>
      <div className="sidebar-groups">
        <a href="#" className="btn-l btn">Apply filters</a>
      </div>
    </form>
  </div>
  )
}

export default Sidebar
