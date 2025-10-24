import { Card } from '../ui/card'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amina K.',
    role: 'Care Assistant',
    location: 'London',
    content:
      "Carers Hub helped me understand my rights and guided me through the sponsorship process. I now have a stable job with fair pay. I'm so grateful for their support!",
    initials: 'AK',
    rating: 5
  },
  {
    name: 'Michael O.',
    role: 'Senior Carer',
    location: 'Manchester',
    content:
      'The CV support was incredible. They helped me highlight my skills properly, and I got three interview calls within a week. The community here truly cares.',
    initials: 'MO',
    rating: 5
  },
  {
    name: 'Grace N.',
    role: 'Support Worker',
    location: 'Birmingham',
    content:
      'As a migrant, I felt lost when I arrived. Carers Hub connected me with other carers, provided training, and helped me build confidence. I recommend them to everyone!',
    initials: 'GN',
    rating: 5
  }
]

export function Testimonials () {
  return (
    <section id='testimonials' className='py-20 md:py-28'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center space-y-4 mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Real Stories, Real Success
          </h2>
          <p className='text-lg text-muted-foreground'>
            Hear from carers who have transformed their careers with Carers Hub
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='p-6 space-y-4 hover:shadow-lg transition-shadow'
            >
              <div className='flex gap-1'>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              <p className='text-sm text-muted-foreground italic'>
                "{testimonial.content}"
              </p>

              <div className='flex items-center gap-3 pt-2'>
                <Avatar>
                  <AvatarFallback className='bg-primary text-primary-foreground'>
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className='font-medium'>{testimonial.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
