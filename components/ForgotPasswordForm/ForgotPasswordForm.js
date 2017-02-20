import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const forgotPassword = (e) => {
  e.preventDefault()
  console.log('submitted')
}

export default () => (
  <div className='container-fluid'>
    <div className='row full-height middle-xs middle-sm middle-md middle-lg middle-xl center-xs center-sm center-md center-lg center-lg'>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
        <h3 style={{ color: 'white', marginBottom: 50 }}>Forgot Password</h3>
        <form onSubmit={forgotPassword}>
          <div className='text-field-email'>
            <TextField
              hintText='email'
              id='email'
              hintStyle={{ color: 'white' }}
              type='text'
              inputStyle={{ color: 'white' }}
              autoComplete={'off'}
              fullWidth
              required
            />
          </div>
          <FlatButton
            type='submit'
            label='Forgot Password'
            labelStyle={{ color: 'white' }}
            style={{ border: '1px solid white' }}
          />
        </form>
      </div>
    </div>
    <style jsx>{`
      .full-height {
        height: 90vh;
      }
      .text-field-email {
        margin-bottom: 15px;
      }
    `}</style>
  </div>
)
