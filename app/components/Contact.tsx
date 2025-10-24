import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card } from '../ui/card'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export function Contact () {
  return (
    <section id='contact' className='py-20 md:py-28'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center space-y-4 mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold'>Get In Touch</h2>
            <p className='text-lg text-muted-foreground'>
              Need help? Have questions? We're here to support you.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='p-6 space-y-6'>
              <h3>Send Us a Message</h3>
              <form className='space-y-4'>
                <div>
                  <Input
                    type='text'
                    placeholder='Your Name'
                    className='bg-input-background'
                  />
                </div>
                <div>
                  <Input
                    type='email'
                    placeholder='Your Email'
                    className='bg-input-background'
                  />
                </div>
                <div>
                  <Input
                    type='text'
                    placeholder='Subject'
                    className='bg-input-background'
                  />
                </div>
                <div>
                  <Textarea
                    placeholder='Your Message'
                    className='bg-input-background min-h-[120px]'
                  />
                </div>
                <Button type='submit' className='w-full'>
                  Send Message
                </Button>
              </form>
            </Card>

            <div className='space-y-6'>
              <Card className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      info@carershub.uk
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      support@carershub.uk
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      +44 (0) 20 1234 5678
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Mon-Fri, 9am-6pm GMT
                    </p>
                  </div>
                </div>
              </Card>

              <Card className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MessageCircle className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <h4>Join Our Community</h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Connect with us on WhatsApp, Telegram, or Facebook for
                      quick support and updates.
                    </p>
                    <div className='flex gap-2 mt-3'>
                      <Button size='sm' variant='outline'>
                        WhatsApp
                      </Button>
                      <Button size='sm' variant='outline'>
                        Telegram
                      </Button>
                      <Button size='sm' variant='outline'>
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
