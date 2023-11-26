import React from 'react';
import { SectionContainer, SectionHeader, SectionTitle, SectionRow } from './styled.js';

const Section = ({ title, sectionBody, extraContent }) => (
  <SectionContainer>
    <SectionHeader>
      <SectionRow>
        <SectionTitle>{title}</SectionTitle>
        {extraContent}
      </SectionRow>
    </SectionHeader>
    {sectionBody}
  </SectionContainer>
);

export default Section;