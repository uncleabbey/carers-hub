import { Button } from './ui/button'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Youtube
} from 'lucide-react'
import { Input } from './ui/input'

export function Footer () {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <img
                src={
                  'https://res.cloudinary.com/kayode/image/upload/v1761330270/logo_img_recn43.jpg'
                }
                alt='Carers Hub'
                className='h-12 w-auto brightness-0 invert'
              />
            </div>
            <p className='text-sm text-primary-foreground/80'>
              Empowering carers to build successful careers in the UK care
              sector.
            </p>
            <div className='flex gap-3'>
              <a
                href='https://www.facebook.com/share/1ERenuKMNi/?mibextid=wwXIfr'
                className='w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Facebook className='w-4 h-4' />
              </a>
              <a
                href='https://x.com/carershub_?s=11'
                className='w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Twitter className='w-4 h-4' />
              </a>
              <a
                href='https://www.instagram.com/carers_hub/'
                className='w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram className='w-4 h-4' />
              </a>
              <a
                href='https://www.linkedin.com/in/carershub'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors'
              >
                <Linkedin className='w-4 h-4' />
              </a>
              <a
                href='https://youtube.com/@agberooflondon?si=y1puGFNXsJwTCNe6'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors'
              >
                <Youtube className='w-4 h-4' />
              </a>
            </div>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-primary-foreground/80'>
              <li>
                <a
                  href='#about'
                  className='hover:text-primary-foreground transition-colors'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href='#testimonials'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href='#blog'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Blog & Resources
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm text-primary-foreground/80'>
              <li>
                <a
                  href='#'
                  className='hover:text-primary-foreground transition-colors'
                >
                  CV Templates
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Training Materials
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Visa Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-primary-foreground transition-colors'
                >
                  Job Board
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-primary-foreground transition-colors'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Newsletter</h4>
            <p className='text-sm text-primary-foreground/80 mb-4'>
              Get weekly updates on jobs, training, and care sector news.
            </p>
            <form className='space-y-2'>
              <Input
                type='email'
                placeholder='Your email'
                className='bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50'
              />
              <Button
                type='submit'
                className='w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90'
              >
                <Mail className='w-4 h-4 mr-2' />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className='border-t border-primary-foreground/20 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80'>
            <p>&copy; 2025 Carers Hub. All rights reserved.</p>
            <div className='flex gap-6'>
              <a
                href='/privacy'
                className='hover:text-primary-foreground transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='hover:text-primary-foreground transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='hover:text-primary-foreground transition-colors'
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
