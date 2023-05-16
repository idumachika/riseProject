import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const EyeClosedIcon = (props: SvgProps) => (
  <Svg fill="none" {...props} width={23} height={16}>
    <Path
      fill="#0898A0"
      d="M18.096 15.662a.62.62 0 0 0 .925 0 .657.657 0 0 0 0-.94L4.836.325a.659.659 0 0 0-.933 0 .69.69 0 0 0 0 .94l14.193 14.397Zm.806-2.49C21.38 11.509 23 9.226 23 8.2 23 6.451 18.291.877 11.504.877c-1.442 0-2.8.25-4.03.663L9.68 3.78a4.58 4.58 0 0 1 1.824-.379c2.622 0 4.743 2.111 4.743 4.8 0 .654-.145 1.283-.399 1.835l3.054 3.136Zm-7.398 2.352c1.57 0 3.029-.293 4.31-.776l-2.223-2.257a4.507 4.507 0 0 1-2.087.508c-2.647 0-4.742-2.18-4.75-4.799 0-.775.177-1.507.491-2.154L4.344 3.083C1.67 4.78 0 7.166 0 8.2c0 1.74 4.793 7.324 11.504 7.324Zm2.698-7.505c0-1.507-1.196-2.73-2.698-2.73-.11 0-.22.008-.322.016l3.003 3.05a4.23 4.23 0 0 0 .017-.336Zm-5.404-.017c0 1.517 1.23 2.74 2.715 2.74.119 0 .229-.009.348-.017L8.815 7.632c-.009.12-.017.25-.017.37Z"
    />
  </Svg>
);
export default EyeClosedIcon;
