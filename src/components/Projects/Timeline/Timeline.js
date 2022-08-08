import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  FcGraduationCap,
} from "react-icons/fc";
import {FaHandHoldingMedical} from 'react-icons/fa'



const Timeline = () => {
  return (
    <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#b285c7', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #b285c7' }}
      date="2022 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<DiJavascript1 />}
    >
      <h3 className="vertical-timeline-element-title">Web Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Monetizemore, Canada</h4>
      <p>
        Header Bidding, User Experience, algorithm development, adtech platform and more.
      </p>
        <span>HTML,</span>
        <span>CSS,</span>
        <span>JS,</span>
        <span>React</span>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#b285c7', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #b285c7' }}
      date="2021 - 2022"
      dateStyle={{ color: '#fff' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<DiReact />}
    >
      <h3 className="vertical-timeline-element-title">Ui Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle">Carecloud, New Jersey, USA</h4>
      <p>
        Frontend development( Reactjs , Javascript , Typescript), User experience, features planning & development and more.
      </p>
    </VerticalTimelineElement>


    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#b285c7', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #b285c7' }}
      date="2020 - 2021"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<DiReact />}
    >
      <h3 className="vertical-timeline-element-title">Frontend Developer (Reactjs)</h3>
      <h4 className="vertical-timeline-element-subtitle">Globewyze,Ontario, Canada</h4>
      <p>
        SASS development, User experience, features planning, Business planning and more.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#b285c7', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #bb93cd' }}
      date="2019 - 2020"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<DiJavascript1 />}
    >
      <h3 className="vertical-timeline-element-title">Web Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">Zeptosol, Islamabad, Pakistan</h4>
      <p>
        SASS product development, features development, project management and more.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2017 - 2021"
      contentStyle={{ background: '#ba4545', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #ba4545' }}
      iconStyle={{ background: '#ba4545', color: '#fff' }}
      icon={<FaHandHoldingMedical />}
    >
      <h3 className="vertical-timeline-element-title">Co-founder/ Volunteer</h3>
      <h4 className="vertical-timeline-element-subtitle">Ma'maar Foundation, Pakistan</h4>
      <p>
      Co-founded an NGO that works for the blood donations and free education for the poor. MF focus on the sustainable development of the youth and nation.      </p>
    </VerticalTimelineElement>
   {/* education */}
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: '#88d3b5', color: '#fff' }}
      date="2014 - 2018"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<FcGraduationCap />}
    >
      <h3 className="vertical-timeline-element-title">Bachelor of Computer Science BS(CS)</h3>
      <h4 className="vertical-timeline-element-subtitle">FAST NUCES, Islamabad</h4>
      <p>
        Graduated from FAST, with expertise in Web, mobile, Ai, and business.
      </p>
    </VerticalTimelineElement>
  
  </VerticalTimeline>
  )
}

export default Timeline