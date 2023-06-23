import React from "react"
import "./footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__task-information">
        <p>Active tasks: &lt;N&gt;</p>
        &nbsp;&nbsp;&nbsp;
        <p>Finished tasks: &lt;M&gt;</p>
      </div>
      <div className="footer__user-information">
        <p>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</p>
      </div>
    </div>
  );
}

export default Footer;
