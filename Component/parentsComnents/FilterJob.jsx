import Head from 'next/head'
// import styles from '../../styles/filterJob.module.css'

export default function FilterJob() {
  return (
    <>
    <div 
    // className={styles.first}
    >Filter jobs
        <div
        //  className={styles.second}
         >
            <h6>Job Category</h6>
            <input list="jobs" placeholder="All Categories"/>
            <datalist id="jobs">
                <option value="front-end developer"></option>
                <option value="Back-end developer"></option>
                <option value="Software developer"></option>


            </datalist><br/><br/>
            <h6>Job Type</h6>
            <input type="checkbox" name="Full Time"/> Full Time<br/>
            <input type="checkbox" name="Part Time"/> Part Time <br/>
            <input type="checkbox" name="Remote"/> Remote <br/>
            <input type="checkbox" name="Freelance"/> Freelance<br/><br/>

            <h6>Job Location</h6>
            <input list="locations" placeholder="Anywhere"/><br/>
            <datalist id="locations">
                <option value="Mumbai"></option>
                <option value="Delhi"></option>
                <option value="Banglore"></option>
            </datalist><br/>
            <h6>Experience</h6>
            <input type="checkbox" name="1-2 years"/> 1-2 Years<br/>
            <input type="checkbox" name="2-3 years"/> 2-3 years <br/>
            <input type="checkbox" name="3-4 years"/> 3-4 years <br/>
            <input type="checkbox" name="4-more.."/> 4-more..<br/><br/>
            <h6>Posted Within</h6>
            <input type="checkbox" name="Any"/> Any<br/>
            <input type="checkbox" name="Today"/> Today <br/>
            <input type="checkbox" name="Last Week"/> Last Week <br/>
            <input type="checkbox" name="Last Month"/> Last Month<br/>
            <h6>Salary</h6>
            <input type="range" min="8000" max="15000"/>
        </div>
    </div>
    </>
  )
}