import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import Progress from '../comp/Progress'

const ProgressBar = () => {
  return (
    <section className='py-10'>
        <Container>
            <Flex className='justify-between'>
                <Progress percentage='70' text='Graphic Design'/>
                <Progress percentage='85' text='Web Development'/>
                <Progress percentage='90' text='Database'/>
                <Progress percentage='75' text='UI/UX Design'/>
            </Flex>
        </Container>
    </section>
  )
}

export default ProgressBar