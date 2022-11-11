import BreadCrumb from "../components/BreadCrumb"
import BreadCrumbItem from "../components/BreadCrumbItem"
import BreadCrumbLink from "../components/BreadCrumbLink"
import BreadCrumbNav from "../components/BreadCrumbNav"
import Container from "../utils/Container"
import Flex from "../utils/Flex"

function FormPage() {
  return (
    <section className="bg-gray-50">
      <Container>
        <BreadCrumb>
          <BreadCrumbNav>
            <BreadCrumbItem>
              <BreadCrumbLink>link1</BreadCrumbLink>
            </BreadCrumbItem>
            <BreadCrumbItem>
              <BreadCrumbLink>link2</BreadCrumbLink>
            </BreadCrumbItem>
            <BreadCrumbItem>
              <BreadCrumbLink>link3</BreadCrumbLink>
            </BreadCrumbItem>
          </BreadCrumbNav>
        </BreadCrumb>
      </Container>
      <Container>
        <Flex>
          <section>

          </section>
          <div className=" h-96 basis-1/2 flex">
            <div className="bg-placeholder bg-white h-full w-full  border-2 rounded-[1.5rem]  bg-no-repeat bg-center">

            </div>
            <div>
              <ul>
                <li className="bg-placeholder-min bg-white bg-contain p-4 bg-no-repeat bg-center border-2 h-10 w-10"></li>
              </ul>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default FormPage