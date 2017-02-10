import test from 'ava'
import geoip from './index'

test('geo ip 127.0.0.1', async t => {
  try {
    const res = await geoip('127.0.0.1')
    t.is(res.ip, '127.0.0.1')
  } catch (err) {
    t.fail(err.code)
  }
})

test('geo ip 8.8.8.8', async t => {
  try {
    const res = await geoip('8.8.8.8')
    t.is(res.ip, '8.8.8.8')
    t.is(res.country_code, 'US')
    t.is(res.country_name, 'United States')
    t.is(res.region_code, 'CA')
    t.is(res.region_name, 'California')
    t.is(res.city, 'Mountain View')
    t.is(res.zip_code, '94035')
    t.is(res.time_zone, 'America/Los_Angeles')
    t.is(res.latitude, 37.386)
    t.is(res.longitude, -122.0838)
    t.is(res.metro_code, 807)
  } catch (err) {
    t.fail(err.code)
  }
})
