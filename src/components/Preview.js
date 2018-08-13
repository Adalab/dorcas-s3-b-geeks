import React, { Component } from 'react';
import ResetButton from './ResetButton';
import ListSkills from './ListSkills'

class Preview extends Component {
  render() {
    const { email, github, job, linkedin, name, palette, phone, photo, skills, typography } = this.props.dataObjectPreview;
    const { dataObjectPreview, dataObject, actionReset } = this.props;
    console.log(skills);
    return (
      <section className="section-card">
        <div className="section-card__container">

          {/*Componente botón */}

          <ResetButton
            dataObjectPreview={dataObjectPreview}
            dataObject={dataObject}
            actionReset={actionReset} />

          {/*Datos por props de Main*/}

          <div id="card" className={`card__container ${palette}`}>
            <div className="info-personal">
              <div id="card__info" className={`info-personal__container ${typography}`}>
                <p id="element-name" className="font-card--bold font-color">{name}</p>
                <p id="element-role" className="font-card">{job}</p>
              </div>
              <img className="personal-image" src={photo} alt="foto personal" />

              <div className="contact">
                <a id="element-tel" className={`contact-link ${!phone ? "contact__link--inactive" : "contact__link--active"} contact__mobile`} href={`tel:${phone}`} target="_blank"><i className="fas fa-mobile-alt icon-mobile icon__contact"></i></a>
                <a id="element-mail" className={`contact-link ${!email ? "contact__link--inactive" : "contact__link--active"} contact__envelope`} href={`mailto:${email}`} target="_blank"><i className="far fa-envelope icon-mail icon__contact"></i></a>
                <a id="element-lin" className={`contact-link ${!linkedin ? "contact__link--inactive" : "contact__link--active"} contact__linkedin`} href={`https://linkedin.com/in/${linkedin}`} target="_blank"><i className="fab fa-linkedin-in icon-linkedin icon__contact"></i></a>
                <a id="element-gh" className={`contact-link ${!github ? "contact__link--inactive" : "contact__link--active"} contact__github`} href={`https://github.com/${github}`} target="_blank"><i className="fab fa-github-alt icon-github icon__contact"></i></a>
              </div>
              {/*Faltan las Skills*/}
              <div className="skills">
                <ListSkills
                  className="skills__list text__skills"
                  arraySkills={skills} />
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}


export default Preview;
