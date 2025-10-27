import React from 'react'

const PlatformTools = () => {
  return (
        <div className="skills__content">
        <h3 className="skills__title">Platforms/Tools</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bxr  bxs-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bxr  bxs-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Jira</h3>

                    </div>
                </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bxr  bxs-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Azure DevOps</h3>

                    </div>
                </div>

                <div className="skills__data">
                    
                    <div style={{ visibility: "hidden" }}>
                        <h3 className="skills__name">HIDDEN</h3>
                    </div>
                </div>

  
            </div>
        </div>
    </div>
  )
}

export default PlatformTools
