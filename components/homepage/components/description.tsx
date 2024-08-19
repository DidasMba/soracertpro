import { Card } from '@/components/ui/card'
import React from 'react'

const Description = () => {
  return (
    <>
    <div className=" max-w-7xl mx-auto  py-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
     <Card className="p-3  m-2 transition-transform duration-200 ease-in-out sasa">
              <img
                alt={`slide.title`}
                className="w-full h-60 object-cover"
                height="200"
                src={`/blog-1.png`}
                style={{
                  aspectRatio: "155/200",
                  objectFit: "cover",
                }}
                width="155"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#00224d]">Formation & accompagnement</h3>
                <p className="text-sm text-gray-400 font-extralight">Nous accompagnons les jeunes dans leur parcours de formation et de developpement</p>
              </div>
            </Card>
            
     <Card className="p-3  m-2 transition-transform duration-200 ease-in-out sasa">
              <img
                alt={`slide.title`}
                className="w-full h-60 object-cover"
                height="200"
                src={`/blog-2.png`}
                style={{
                  aspectRatio: "155/200",
                  objectFit: "cover",
                }}
                width="155"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#00224d]">Certification & Bourses</h3>
                <p className="text-sm text-gray-400 font-extralight">Nous offron des Certification reconnues et des Bourses des formations internationales</p>
              </div>
            </Card>
            
     <Card className="p-3  m-2 transition-transform duration-200 ease-in-out sasa">
              <img
                alt={`slide.title`}
                className="w-full h-60 object-cover"
                height="200"
                src={`/blog-1.png`}
                style={{
                  aspectRatio: "155/200",
                  objectFit: "cover",
                }}
                width="155"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#00224d]">Communaute</h3>
                <p className="text-sm text-gray-400 font-extralight">Nous sommes une Communaute des passionnes da la technologie et de innovation</p>
              </div>
            </Card>
            
     <Card className="p-3  m-2 transition-transform duration-200 ease-in-out sasa">
              <img
                alt={`slide.title`}
                className="w-full h-60 object-cover"
                height="200"
                src={`/blog-3.png`}
                style={{
                  aspectRatio: "155/200",
                  objectFit: "cover",
                }}
                width="155"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#00224d]">Opportunites</h3>
                <p className="text-sm text-gray-400 font-extralight">Nous recherchons et partageons des Opportunites pour aider la membre de la Communaute a se developper</p>
              </div>
            </Card>
            </div>
            </div>  
    </>
  )
}

export default Description
