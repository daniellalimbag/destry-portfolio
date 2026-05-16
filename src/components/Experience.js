import React, { useState } from 'react';
import { FiBriefcase, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Experience = () => {
  const workItems = [
    {
      company: 'MODEC Offshore Production System (Singapore) Pte. Ltd.',
      logo: '/assets/modec.jpg',
      roles: [
        {
          title: 'Offshore Planner',
          date: 'April 2025 - Present',
          project: 'Bacalhau FPSO (MV35) Project',
          details:[
            'Updating and Monitoring of EPCI Schedule in MS Project for Client submission.',
            'Prepare and monitor Look-Ahead schedule that covers Construction and Commissioning activities, Material requirements, Manpower and Mechanical Completion activities.',
            'Involve in the preparation of Weekly Reports and Monthly Reports.',
            'Prepare Productivity Analysis report for weekly submission to the Client.',
            'Coordinate with the Onshore Material Controllers for Offshore material requirement.',
            'Involve in the preparation of schedule, monitoring and updating for the project\'s critical activity such as the Flare Tower Support rectification work, which is critical for First Oil Milestone.',
            'Coordinate with Offshore\'s Construction Supervisors for progress of all EPCI activities including the COW (Carry Over Works) as well as OWL (Outstanding Work List).',
            'Prepare the weekly POB report which includes the Manpower and Manhours data included in the Weekly and Monthly reports.',
            'Update and monitor the Post First Oil Outstanding Worklist by close coordination with the corresponding SRPs on board.',
            'Prepare, update and monitor the Heat Tracing activities critical achieving the First Oil and First Gas milestones.',
            'Involve in the updating and monitoring of G07 Systems close-out.',
            'Coordinate with the Mechanical Completion Coordinator for system close-out required in Master Schedule update.',
            'Involve in the P91 Joints Rectification schedule preparation and progress monitoring.',
            'Update and Monitor Construction activities such as Heavy-Duty Handrail Reinforcement work, the Witness Joints progress, Fire Hydrant support installation and Fire Belt and Flange Protection activities.',
            'Support the Lead Planner in Preparing the Compressor manning and activity schedule critical for First Oil achievement.',
            'Involve in the updating and monitoring of the GTCC Schedule.'
          ],
        },
        {
          title: 'Senior Planner',
          date: 'April 2024 - April 2025',
          project: 'Shell Brazil Petroleo Ltda Gato Do Mato (GDM) FPSO Project',
          details: [
            'Preparation, Updating and Monitoring of P6 FEED Schedule for Monthly Progress reporting to the Client.',
            'Coordinate with Lead Engineers the weekly progress of their respective deliverables for weekly progress reporting.',
            'Prepare and update the FEED Progress S-Curves and Progress Charts of all FEED Engineering deliverables for ELT Meetings, Weekly and Monthly progress reporting.',
            'Prepare and provide the Engineering look ahead deliverables for both Marine and Topsides (4-Week & 2-Week Lookahead) to ensure targets are met and delays are kept on a minimum.',
            'Prepare the GAP Analysis for engineering deliverables that get delayed, indicating the reasons for delay and the mitigation steps to address the delays.',
            'Coordinate with Procurement Team (Engineers and Buyers) for progress update in terms of procurement deliverables such as (RFQ, TBE, CBE) status and targets.',
            'Prepare the S-Curves for Procurement Progress for RFQ Packages for presentation to the Client.',
            'Prepare the GAP analysis for Procurement deliverables that are delayed and providing the corrective action to address the delays.',
            'In-charge in the preparation of the FEED Weekly Progress Reports for Client submission.',
            'Prepare the FEED Monthly Progress Report for Client submission.',
            'Prepare and update the Critical Path Analysis for FEED Phase (as part of FEED Monthly Progress Report).',
            'Involve in the schedule preparation and updates of CAPEX Gates schedule.',
            'Participated in all Subcontractor Workshops Presentation for EPCI Schedule and Execution Strategy.',
            'Participated in Risk Workshops.',
            'Involve in the preparation and execution of the 1st EPCI Schedule Review Workshop.',
            'Prepare the MDR Mapping for Hull and Marine Engineering Deliverables (MODEC and COSCO) for EPCI Schedule development.',
            'Involve in the Preparation of EPCI Level 3 Schedule.'
          ],
        },
      ],
    },
    {
      company: 'Hyundai Engineering and Construction Limited',
      logo: '/assets/hyundai.jpg',
      roles: [
        {
          title: 'Planning Engineer',
          date: 'May 2022 to Mar 2024',
          project: 'JFGP (Jafurah) Package 3 Construction, Saudi Arabia',
          details: [
            'Preparation of Construction Schedule using Primavera P6.',
            'Worklist scoping and Package Preparation.',
            'Coordinate with Discipline Engineers in scheduling preparation and execution.',
            'Prepare Daily Progress Reports, Weekly Progress Reports and Monthly Progress Reports.',
            'Assist in Progress Payment Preparation for Monthly Invoicing.',
            'Monitoring and Tracking of Progress and report directly to the Construction Manager.',
            'Prepare Look-Ahead Plans for Site Execution.'
          ],
        },
        {
          title: 'Planning Engineer for Construction and Commissioning',
          date: 'Dec 2016 - Apr 2022 ',
          project: 'Al-Zour LNGI Project,Kuwait(USD2.79 Bn)',
          details: [
            'Preparation of Method Statement for construction activities i.e., Deck Concrete Work, Pile Splicing, Pile Bent work, etc for submission and approval of client.',
            'Preparation and review of Lifting Plans, Method Statement and Risk Analysis.',
            'Preparation and review of schedule for reclamation works i.e., dredging reclamation, vibro-flotation, layer compaction, rigid inclusion and revetment works.',
            'Responsible for local contents cost stewardship and monthly expenditures reporting including participation in local contents quarterly audit.',
            'Preparation of monthly miscellaneous payment invoices for Marine Team.',
            'Preparation, consolidation, and review of all pre-qualification documents of all subcontractors Costing & Procurement.',
            'Monitoring of sub-contracting qualification assessment and bidder list approval.',
            'Review of Invitation to Bid packages submitted by qualified subcontractors.',
            'Coordination of pile damage repair at the trestle area which involves survey of all piles and preparation of report for pile damage repair works.',
            'Preparation of Material Approval Request documents for submission and approval of client.',
            'Preparation and submission of Monthly Progress Payment invoice for the Marine Team based on milestone achievements and approvals.',
            'Preparation of monthly progress report for change requests.'
          ],
        },
      ],
    },
    {
      company: 'Bumi Armada Berhad',
      logo: '/assets/bumi-armada.jpg',
      roles: [
        {
          date: 'Jul 2015 - Jul 2016',
          project: 'ENI-Angola 15/06 East Hub FPSO',
          details: [
            'Involve in the development of FPSO Schedule for bidding proposal, for FEED, Detailed Engineering, procurement and construction, onshore and offshore commissioning, and start-up.',
            'Progress monitoring, progress measurement and preparation of various types of reports such as weekly reports, monthly reports, S-Curve preparation, and Histograms.',
            'Scheduling and progress monitoring of FPSO installation and commissioning including preparation of mechanical completion documentation and system handover.'
          ],
        },
      ],
    },
    {
      company: 'ExxonMobil Asia Pacific PL',
      logo: '/assets/exxon.jpeg',
      roles: [
        {
          title: 'Turnaround Planner, Majors Planner',
          date: 'Dec 2012 - Jul 2015',
          projects: [
            { name: 'PAC Turnaround 2015, Ayer Chawan, Jurong Island, Singapore' },
            { name: 'SCP Turnaround 2013, 100 Jurong Island Highway, Singapore' },
            { name: 'MPHC Shutdown 2013, 18 Pioneer Road, Singapore' }
          ]
        },
      ],
    },
    {
      company: 'Foster Wheeler Asia Pacific Pte Ltd',
      logo: '/assets/foster.png',
      roles: [
        {
          title: 'Senior Project Engineer',
          date: 'Oct 2011 to Mar 2012',
          project: 'Lanxess BTR Project'
        },
        {
          title: 'Project Engineer / Field Engineer',
          date: 'Dec 2006 to Sept 2011',
          projects: [
            { name: 'FT Wax Expansion Project (Sasol, South Africa)' },
            { name: 'Shell Bukom Turnaround TR3 (Pulau Bukom, SG)' },
            { name: 'Chevron Oronite Detergent Expansion Project (Pulau Sakra, SG)' },
            { name: 'Lucite Alpha 1 Project' },
            { name: 'Exxonmobil Long Term Agreement (LTO)' },
            { name: 'LCO Onsite /Offsite Fluxing Project' },
            { name: 'Alpha 1 Project - Lucite International' },
            { name: 'Novartis Singapore Pharmaceutical Mfg Project' },
          ]
        },
      ],
    },
    {
      company: 'PPL Shipyard Pte Ltd',
      logo: '/assets/ppl.png',
      roles: [
        {
          title: 'Planning Engineer',
          date: 'Jun 2006 to Dec 2006',
          project: 'Civil and Structural Design Support Packages',
          details: [
            'Preparation of Project schedule using Primavera 3.1.',
            'Coordination of equipment delivery with all vendors involved in the project.',
            'Preparation of Monthly Progress Report for submission to the client.',
            'Monitoring and update of schedule.',
            'Coordination with client through fortnightly meetings and providing updates and clarifications on project details and engineering process.'
          ],
        },
      ],
    },
    {
      company: 'Plant Engineering Construction Pte Ltd',
      logo: '',
      roles: [
        {
          title: 'Project Engineer / Field Engineer',
          date: 'Dec 1997 to Jun 2006',
        },
      ],
    },
  ];

  const educationItems = [
    {
      company: 'Batangas State University',
      logo: '/assets/bsu.png',
      roles: [
        {
          title: 'Bachelor of Science in Civil Engineering',
          date: '1993 - 1997',
        },
      ],
    },
  ];

  const [activeTimeline, setActiveTimeline] = useState('work');
  const [expandedRoles, setExpandedRoles] = useState({});
  const activeItems = activeTimeline === 'work' ? workItems : educationItems;
  const visibleDetailCount = 3;

  const toggleRole = (roleId) => {
    setExpandedRoles(prev => ({
      ...prev,
      [roleId]: !prev[roleId],
    }));
  };

  // Renders a single project block with optional expandable details
  const renderProjectDetails = (projectKey, details = []) => {
    const isExpanded = Boolean(expandedRoles[projectKey]);
    const visibleDetails = isExpanded ? details : details.slice(0, visibleDetailCount);
    const hasMore = details.length > visibleDetailCount;

    return (
      <>
        {visibleDetails.length > 0 && (
          <ul className="achievement-list">
            {visibleDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        {hasMore && (
          <button
            className="details-toggle"
            type="button"
            onClick={() => toggleRole(projectKey)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'Read more'}
            {isExpanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
          </button>
        )}
      </>
    );
  };

  const renderRole = (item, role) => {
    const roleTitle = role.title || 'Project Role';
    const roleId = `${item.company}-${roleTitle}`;

    // Multiple named projects (no per-project details) → render as a simple list
    const hasMultipleProjects = role.projects && role.projects.length > 0;

    // Single project with optional details
    const hasSingleProject = role.project && !hasMultipleProjects;

    return (
      <div className="timeline-role" key={roleId}>
        <div className="role-meta">
          <p className="company">{roleTitle}</p>
          <p className="date">{role.date}</p>
        </div>

        {hasMultipleProjects && (
          <div className="project-block">
            <p className="project-name">Projects:</p>
            <ul className="projects-list">
              {role.projects.map((project) => (
                <li key={project.name}>{project.name}</li>
              ))}
            </ul>
          </div>
        )}

        {hasSingleProject && (
          <div className="project-block">
            <p className="project-name">
              Project: <span>{role.project}</span>
            </p>
            {renderProjectDetails(roleId, role.details || [])}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="experience" className="section featured-experience">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>Project Engineer</h2>
          <p>A focused record of 25 years of experience.</p>
        </div>

        <div className="timeline-tabs" role="tablist" aria-label="Experience timeline">
          <button
            type="button"
            className={activeTimeline === 'work' ? 'active' : ''}
            onClick={() => setActiveTimeline('work')}
            role="tab"
            aria-selected={activeTimeline === 'work'}
          >
            Work
          </button>
          <button
            type="button"
            className={activeTimeline === 'education' ? 'active' : ''}
            onClick={() => setActiveTimeline('education')}
            role="tab"
            aria-selected={activeTimeline === 'education'}
          >
            Education
          </button>
        </div>

        <div className="experience-timeline">
          {activeItems.map((item) => (
            <article
              className={`experience-item${activeTimeline === 'education' ? ' experience-item--education' : ''}`}
              key={item.company}
            >
              <div className="experience-rail" aria-hidden="true">
                <div className="experience-logo">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.company} logo`} />
                  ) : (
                    <FiBriefcase aria-hidden="true" />
                  )}
                </div>
              </div>
              <div className="experience-card">
                <h3>{item.company}</h3>
                {item.roles.map((role) => renderRole(item, role))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;