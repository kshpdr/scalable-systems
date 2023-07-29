import { Content, ContentBlock } from "./Authors.styles"

const Authors: React.FC = () => {
    return(
        <ContentBlock>
            <Content>
                <div>
                    <div>
                        <h2>Our Team</h2> <br/>
                        <h5>Daniil Alekseev</h5>
                        <h5>Julius Bergemann</h5>
                        <h5>Denis Koshelev</h5>
                        <h5>Alexander Felten</h5>
                        <h5>Hans Meisel</h5>
                    </div>
                    <br/>
                    <div>
                        <h2>Our Project</h2> <br/>
                        In our project we allow potential users to create computing jobs with properties described in Jobs page in order to sort them 
                        between computing clusters located in all 14 regions of Great Britain according to actual carbon intensity values in those regions. <br/>
                        Intensity data is fetched from <a href="carbonintensity.org.uk">carbonintensity.org.uk</a> <br/>
                        Jobs are then sorted after their deadline, and our algorithm then assignss timeslots to the jobs according to lowest intensity values for the next 48 hours. <br/>

                    </div>
                </div>
            </Content>
        </ContentBlock>
    )
}

export default Authors