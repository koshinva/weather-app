import { FC } from 'react';
import { IconsApp, TypeIcon } from 'types/icon.type';

const Icon: FC<{ icon: TypeIcon }> = ({ icon }) => {
  const IconComponent = IconsApp[icon];

  return <IconComponent /> || <IconsApp.FaCloud />;
};

export default Icon;
