import { calendarBackgroundColor, mainTextColor } from 'redux/Theme/Theme';
import styled from 'styled-components';

export const MonthCalendarHeaderList = styled.ul`
display: flex;
justify-content: space-between;
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
margin-bottom: 14px;
padding: 16px 16px;
font-weight: 600;
font-size: 16px;
line-height: 1.12;
text-transform: uppercase;
color: ${mainTextColor};
background-color: ${calendarBackgroundColor};
@media screen and (min-width: 768px) {
    margin-bottom: 18px;
padding: 14px 40px;
}
@media screen and (min-width: 1440px) {
margin-bottom: 15px;
padding: 14px 60px;
}
`

export const MonthCalendarHeaderItem = styled.li`
color: #3e85f3 ;`