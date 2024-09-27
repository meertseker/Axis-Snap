import React, { useRef } from 'react';
import Heading from "./Heading";
import Section from "./Section";

const MatterportViewer = React.forwardRef((props, ref) => (
  <Section className="overflow-hidden" id="virtual-tour" ref={ref}>
    <div className="container md:pb-10">
      <Heading tag="Virtual Tour" title="Explore our 3D Space" />
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          src="https://my.matterport.com/show/?m=ng2JKBjg7pW"
          frameBorder="0"
          allow="fullscreen; vr"
          className="absolute top-0 left-0 w-full h-full"
          title="Matterport Virtual Tour"
        ></iframe>
        
      </div>
      
    </div>
  </Section>
));

export default MatterportViewer;
