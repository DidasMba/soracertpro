/** @format */
import Section from "@/components/common/Section";
import HowWeWorkTile from "./HowWeWorkTile";

const AboutUs = () => {
    return (
        <Section id='about'>
            <HowWeWorkTile
                content={`Participez à des événements, programmes élaborés par
                            des experts du secteur, et mettez en pratique des
                            projets concrets pour acquérir des compétences
                            utiles. Développez un portfolio remarquable afin
                            d'être prêt pour votre recherche d'emploi..`}
                imageURL='/blog-3.png'
                isReverted={true}
                title="Apprenez auprès d'experts du secteur qui vous consacreront du temps"
            />
        </Section>
    );
};

export default AboutUs;
