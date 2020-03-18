window.Event=new Vue();

Vue.component('coupon', {
    template: `
    <div>
        <label class="label">Coupon Code:</label>
        <input placeholder="Enter your coupon code" @blur="applied">
    </div>`,
    methods: {
        applied() {
            Event.$emit('coupon-was-applied');
        }
    }
})


new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    // methods: {
    //     onCouponApplied() {
    //         this.couponApplied = true;
    //     }
    // },
    created(){
        Event.$on('coupon-was-applied',()=>alert('Handle it'))
    }
})