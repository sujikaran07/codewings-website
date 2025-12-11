import { client } from "@/sanity/lib/client"
export { client }
import { groq } from "next-sanity"

export async function getServices() {
  return client.fetch(groq`*[_type == "service"]{
    title,
    description,
    icon
  }`)
}

export async function getTechnologies() {
  return client.fetch(groq`*[_type == "technology"]{
    name,
    icon,
    color
  }`)
}

export async function getHomepageData() {
  return client.fetch(groq`*[_type == "homepage"][0]{
    heroHeading,
    heroSubHeading,
    heroDescription,
    stats,
    services[]->{
      title,
      description,
      icon
    }
  }`)
}

export async function getSettings() {
  return client.fetch(groq`*[_type == "settings"][0]{
    siteName,
    email,
    phone,
    address,
    socialLinks
  }`)
}
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      title,
      "slug": slug.current,
      description,
      client,
      result,
      "image": image.asset->url,
      technologies[]->{
        name,
        color
      },
      link
    }`
  )
}

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      author,
      "image": mainImage.asset->url,
      publishedAt,
      "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "...",
      body
    }`
  )
}

export async function getAboutPage() {
  return client.fetch(
    groq`*[_type == "about"][0]`
  )
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      author,
      "image": mainImage.asset->url,
      publishedAt,
      body
    }`,
    { slug }
  )
}
