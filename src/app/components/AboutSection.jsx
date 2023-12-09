'use client'
import React, {useTransition, useState } from 'react'
import Image from 'next/image'
import TabButon from './TabButon'

function AboutSection() {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	}
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>Sequalize</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul>
          <li>Rakamin Academy Fullstack Web Developer</li>
          <li>Universitas Riau</li>
        </ul>
      )
    },
    {
      title: "Certifications",
      id: "Certifications",
      content: (
        <ul>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>Sequalize</li>
        </ul>
      )
    },
  ]


  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="about image"
          className='rounded-md '
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            provident, fuga eligendi, laboriosam eaque vero veniam consectetur
            aspernatur nesciunt eveniet dolorem unde in, molestias consequuntur.
            Ab, quod! Harum, perferendis odio.
          </p>
          <div className="flex flex-row mt-8">
            <TabButon
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButon>
            <TabButon
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              {" "}
              Education{" "}
            </TabButon>
            <TabButon
              selectTab={() => handleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButon>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection