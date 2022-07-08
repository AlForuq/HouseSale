    import styled from 'styled-components'

const getType = (type) => {
    switch (type) {
        case 'secondary':
            return {
                border: '1px solid #e6e9ec',
                color: '#0D263B',
            };
        case 'primary':
            return {
                background: '#0061DF',
                color: '#FFFFFF',
                border: 'none'
            };
        default:
            return {
                border: '1px solid #E6E9EC',
                color: '#FFFFFF',
            }

    }
}
// eslint-disable-next-line react-hooks/exhaustive-deps
export const Container = styled.div`
    display: flex;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border-radius: 2px;

    justify-content: center;
    align-items: center;
    height: ${({ height }) => height || '44px'};
    min-width: ${({ width }) => (width ? width : '100%')};
    width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    cursor: pointer;

${({type}) => getType(type)}
:active {
transform: scale(0.98);
opacity: 0.7;
}`



