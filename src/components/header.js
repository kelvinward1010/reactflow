import { useColorModeValue } from '@chakra-ui/react';
import { Col, Row } from 'antd';

function Header() {
    const background = useColorModeValue('white', 'black');
    const colorText = useColorModeValue('black', 'white')

    return (
        <div className='header'>
            <Row className='header-main' style={{
                backgroundColor: background
            }}>
                <Col span={8} className='header-left'>
                    <div className='header-left-icon'>
                    </div>
                    <h1 style={{
                        color: colorText
                    }}>
                        Data Analytics
                    </h1>
                </Col>
            </Row>
        </div>
    )
}

export default Header