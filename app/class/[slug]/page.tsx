import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function ClassPage({ params }: { params: { slug: string }} ) {

  return (
  <div className="">
    <Navbar/>
    <div className="text-white">
      <DrawClass params={params}/>
    </div>
    <Footer/>
  </div>
  )
}

function DrawClass({ params }: {params: {slug: string }}) {
  var slug = params.slug;
  if(slug === 'scout') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'soldier') {
    return (
      <div>{slug}</div>
    )
  }
  else if (slug === 'pyro') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'demoman') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'heavy') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'engineer') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'medic') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'sniper') {
    return (
      <div>{slug}</div>
    )
  }
  else if(slug === 'spy') {
    return (
      <div>{slug}</div>
    )
  }

  return (
    <div>INVALID CLASS</div>
  )
}