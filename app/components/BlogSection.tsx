import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'

const posts = [
  {
    title: 'Understanding Your Rights as a Care Worker in the UK',
    excerpt:
      'Essential information every carer should know about employment rights, working hours, and fair treatment.',
    date: 'October 15, 2025',
    category: 'Rights & Legal'
  },
  {
    title: 'Complete Guide to Health & Care Worker Visa 2025',
    excerpt:
      'Step-by-step guidance on applying for the Health and Care Worker visa, eligibility requirements, and common pitfalls to avoid.',
    date: 'October 10, 2025',
    category: 'Visa & Immigration'
  },
  {
    title: 'How to Spot Exploitation in Care Job Offers',
    excerpt:
      'Warning signs to watch for when reviewing job offers and sponsorship opportunities in the care sector.',
    date: 'October 5, 2025',
    category: 'Career Advice'
  }
]

export function BlogSection () {
  return (
    <section id='blog' className='py-20 md:py-28 bg-secondary/30'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-end mb-12'>
          <div className='space-y-2'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Latest Updates & Resources
            </h2>
            <p className='text-lg text-muted-foreground'>
              Stay informed with news, guides, and stories from the care sector
            </p>
          </div>
          <Button variant='outline' className='hidden md:inline-flex'>
            View All Posts
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {posts.map((post, index) => (
            <Card
              key={index}
              className='overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='aspect-video bg-muted relative'>
                <ImageWithFallback
                  src='https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MDcxNzcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                  alt={post.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6 space-y-3'>
                <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                  <span className='bg-primary/10 text-primary px-2 py-1 rounded'>
                    {post.category}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Calendar className='w-3 h-3' />
                    {post.date}
                  </span>
                </div>
                <h3 className='line-clamp-2'>{post.title}</h3>
                <p className='text-sm text-muted-foreground line-clamp-3'>
                  {post.excerpt}
                </p>
                <Button variant='link' className='p-0 h-auto'>
                  Read More
                  <ArrowRight className='ml-1 h-3 w-3' />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className='text-center mt-8 md:hidden'>
          <Button variant='outline'>
            View All Posts
            <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  )
}
