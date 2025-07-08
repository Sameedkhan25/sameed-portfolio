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
    <div className="modern-timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'rgba(15, 23, 42, 0.6)', 
            color: '#F8FAFC',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
          date="May 2022 - Present"
          dateStyle={{ color: '#3B82F6', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #3B82F6, #10B981)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
          }}
          icon={<DiReact />}
        >
          <h3 className="timeline-title">Full Stack Web Developer</h3>
          <h4 className="timeline-company">MonetizeMore, Whiterock, Canada</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">🚀</span>
              <span>Revamped A/B testing platform UI accommodating multiple cohorts, boosting client revenue by <strong>25-90%</strong></span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">⚡</span>
              <span>Led full-stack development of PubGuru platform with end-to-end ownership from planning to deployment</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🔧</span>
              <span>Streamlined operational efficiency by automating various features and processes, reducing manual efforts</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">👥</span>
              <span>Collaborated with executives (CTO & CPO) ensuring regular weekly rollouts aligned with strategic goals</span>
            </div>
          </div>
          <div className="tech-tags-timeline">
            <span className="tech-tag-timeline">React</span>
            <span className="tech-tag-timeline">Next.js</span>
            <span className="tech-tag-timeline">JavaScript</span>
            <span className="tech-tag-timeline">Prebid.js</span>
            <span className="tech-tag-timeline">Kibana</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'rgba(15, 23, 42, 0.6)', 
            color: '#F8FAFC',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
          date="Jan 2021 - Apr 2022"
          dateStyle={{ color: '#10B981', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #10B981, #3B82F6)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
          }}
          icon={<DiReact />}
        >
          <h3 className="timeline-title">UI Engineer</h3>
          <h4 className="timeline-company">CareCloud, New Jersey, USA</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">🏥</span>
              <span>Worked on cloud-based EHR platform serving <strong>thousands of users</strong> with production-level web applications</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🔧</span>
              <span>Developed and maintained reusable UI components using ReactJS and TypeScript, enhancing application functionality & UX</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🐛</span>
              <span>Played key role in bug resolution and improving application reliability and performance</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🤝</span>
              <span>Engaged in peer programming fostering collaborative development environment</span>
            </div>
          </div>
          <div className="tech-tags-timeline">
            <span className="tech-tag-timeline">React</span>
            <span className="tech-tag-timeline">Next.js</span>
            <span className="tech-tag-timeline">TypeScript</span>
            <span className="tech-tag-timeline">Firebase</span>
            <span className="tech-tag-timeline">Redux</span>
            <span className="tech-tag-timeline">GraphQL</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'rgba(15, 23, 42, 0.6)', 
            color: '#F8FAFC',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
          date="Mar 2020 - Dec 2020"
          dateStyle={{ color: '#8B5CF6', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
          }}
          icon={<DiReact />}
        >
          <h3 className="timeline-title">Frontend Developer</h3>
          <h4 className="timeline-company">Globewyze, Ontario, Canada</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">🎨</span>
              <span>Led ReactJS frontend development to elevate product interfaces, significantly improving user interaction and satisfaction</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">💼</span>
              <span>Actively engaged in strategic business discussions with partners and clients to shape venture strategies</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📱</span>
              <span>Played crucial role in developing "iConnect" employee engagement app in partnership with Interloop</span>
            </div>
          </div>
          <div className="tech-tags-timeline">
            <span className="tech-tag-timeline">React</span>
            <span className="tech-tag-timeline">Redux</span>
            <span className="tech-tag-timeline">TypeScript</span>
            <span className="tech-tag-timeline">GrapeJS</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ 
            background: 'rgba(15, 23, 42, 0.6)', 
            color: '#F8FAFC',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
          date="Apr 2019 - Feb 2020"
          dateStyle={{ color: '#F59E0B', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #F59E0B, #EF4444)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)'
          }}
          icon={<DiJavascript1 />}
        >
          <h3 className="timeline-title">Software Engineer</h3>
          <h4 className="timeline-company">Zeptosol, Islamabad, Pakistan</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">💻</span>
              <span>Assisted in web development projects, focusing on crafting dynamic user interfaces and contributing to backend development</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">⚡</span>
              <span>Ensured optimal performance and user experience through efficient coding practices</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🤝</span>
              <span>Collaborated with cross-functional teams to deliver high-quality software solutions</span>
            </div>
          </div>
          <div className="tech-tags-timeline">
            <span className="tech-tag-timeline">JavaScript</span>
            <span className="tech-tag-timeline">HTML/CSS</span>
            <span className="tech-tag-timeline">Node.js</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2021"
          contentStyle={{ 
            background: 'rgba(239, 68, 68, 0.1)', 
            color: '#F8FAFC',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(239, 68, 68, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(239, 68, 68, 0.8)' }}
          dateStyle={{ color: '#EF4444', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #EF4444, #DC2626)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
          }}
          icon={<FaHandHoldingMedical />}
        >
          <h3 className="timeline-title">Co-founder / Volunteer</h3>
          <h4 className="timeline-company">Ma'maar Foundation, Pakistan</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">❤️</span>
              <span>Co-founded NGO focused on blood donations and free education for underprivileged communities</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">🏥</span>
              <span>Organized social service events including blood donation camps and medical camps</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📚</span>
              <span>Focused on sustainable development of youth and nation through educational initiatives</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          contentStyle={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: '#F8FAFC',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(59, 130, 246, 0.8)' }}
          dateStyle={{ color: '#3B82F6', fontWeight: '600' }}
          iconStyle={{ 
            background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', 
            color: '#fff',
            border: 'none',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
          }}
          icon={<FcGraduationCap />}
        >
          <h3 className="timeline-title">Bachelor of Computer Science</h3>
          <h4 className="timeline-company">FAST (NUCES), Islamabad, Pakistan</h4>
          <div className="timeline-achievements">
            <div className="achievement-item">
              <span className="achievement-icon">🎓</span>
              <span>Major in Web App Development, Mobile App Development, Artificial Intelligence, Digital Image Processing</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">📅</span>
              <span>Graduated December 2018</span>
            </div>
            <div className="achievement-item">
              <span className="achievement-icon">💡</span>
              <span>Built strong foundation in computer science fundamentals and software engineering principles</span>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Timeline