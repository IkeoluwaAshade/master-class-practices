import React from 'react'
import styled from 'styled-components'

const Faq = () => {
  return (
    <Container>

        <Wrapper>
            <h1>Lorem Ipsum</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed placerat ex. Aliquam molestie et sapien tempor pellentesque. Duis scelerisque lorem quis ullamcorper viverra. In orci enim, bibendum non euismod sit amet, auctor non nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ipsum neque, sollicitudin quis posuere sit amet, convallis suscipit leo. Morbi fermentum aliquam auctor. <hr /><br />

                Nunc et neque ac erat euismod laoreet. Aliquam lacus dolor, lobortis et enim sit amet, viverra venenatis leo. Duis vestibulum libero vitae lorem laoreet dictum. Ut ac elementum est. Donec sagittis nec justo vel rutrum. Morbi blandit lorem quis enim venenatis suscipit. Maecenas placerat nisi erat, suscipit pharetra metus aliquam et. Nunc nec neque massa. Sed eu finibus eros, sodales ultrices erat. Sed pharetra purus eu eros facilisis, eget interdum ante mollis. Nam tempor ex sed lectus posuere, sed sodales eros eleifend. Aenean venenatis nunc a pretium imperdiet. Suspendisse placerat bibendum dictum. Sed efficitur eget odio non fermentum. Ut egestas ex id nibh pellentesque mollis. Cras venenatis rutrum ipsum eget sagittis.<hr /><br />

                Fusce id vulputate massa. Etiam molestie vehicula urna, id vestibulum felis eleifend bibendum. Nulla porta ligula eu ornare commodo. Nullam ut mi facilisis, ullamcorper diam quis, tristique ex. Cras libero magna, lobortis a vestibulum eu, aliquet vitae erat. Cras tortor augue, semper vitae libero ullamcorper, placerat posuere ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque a enim mollis, finibus velit at, auctor nulla. Duis pharetra faucibus mauris et mattis. Mauris vitae blandit nulla, ut maximus erat. Quisque et mauris non arcu egestas eleifend in sed felis. Sed a dui eget purus tristique dictum ac eget tellus. Integer aliquam tristique metus eget euismod. Nam rhoncus ex ipsum, sit amet semper eros ultricies sed.<hr /><br />

                Nam tempus metus a elit porta, a ornare lorem pretium. Pellentesque hendrerit eros quis pellentesque accumsan. Nulla libero magna, molestie ut justo vitae, aliquet eleifend tortor. In varius fermentum rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus laoreet imperdiet. Vestibulum venenatis mi erat. Ut finibus consectetur lacus et tincidunt. Suspendisse diam massa, porttitor in mattis ut, finibus in augue.<hr /><br />

                Mauris ut dui quis orci lobortis sollicitudin a in tellus. Nulla sed egestas mi. Nam volutpat diam nibh, tempus bibendum est vehicula porttitor. Aliquam imperdiet tempor nisi, et maximus risus congue sit amet. Nullam sed dui eget arcu pellentesque interdum at id quam. Curabitur pulvinar augue sem, sodales molestie eros volutpat bibendum. Morbi arcu felis, sagittis suscipit sollicitudin ac, semper ac dolor. Donec congue porta congue. Pellentesque ullamcorper a ligula at euismod. Phasellus consequat sed est vitae pharetra. Duis lacinia efficitur lobortis. Sed tristique sem eget urna pellentesque luctus. Donec nulla nisl, finibus vel lorem eu, pellentesque volutpat orci. Nunc dignissim ex lacus, ut elementum lectus faucibus vitae<hr /><br />
            </p>
        </Wrapper>
        
    </Container>
  )
}

export default Faq

const Container = styled.div`
    /* background-color: pink; */
    color: gray;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    /* background-color: silver; */
    width: 85%;
`