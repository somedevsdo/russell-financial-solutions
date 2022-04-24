import React from 'react';

type Props = {
  secondaryTitle?: string;
  primaryTitle: string;
  children: React.ReactNode;
  modifier: string;
};

export default function Profile(props: Props) {
  const { secondaryTitle, primaryTitle, children, modifier } = props;
  return (
    <div className="person-card">
      <div className={`person-card__container person-card__container--${modifier}`}>
        <div className="person-card__content">{children}</div>
      </div>
      <div className="person-card__job">
        {secondaryTitle && <div className="person-card__title">{secondaryTitle}</div>}
        <div className="person-card__name">{primaryTitle}</div>
      </div>
    </div>
  );
}
