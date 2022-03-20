import React from 'react'

function Contact() {
    return(
        <section>
        <img id="workout" img src="workoutimg.jpeg" alt="photo"/>


        <div class="showcasetext2">
        <div class="contact">
         <div class="form">
            <form>
                <table>
                    <tr>
                        <td>Full name: <input type="text" placeholder="John Doe"/>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Email: <input type="text" placeholder="email"/> </td>
                    </tr>
                </table>
                    <table>
                        <tr>
                            <td>Phone # <input type="text" placeholder="Phone Number"/> </td>
                        </tr>
                     </table>
                     <table>
                        <tr>
                            <td>
                            <textarea name="message" placeholder="Leave a Comment" rows="20" cols="50"
                            required></textarea>
                            </td>
                        </tr>
                    </table>
            </form>
        </div>
         </div>
         </div>
         
        </section>

    )
}

export default Contact;