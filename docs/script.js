
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    

        window.__genspark_remove_badge_link = "https://www.genspark.ai/api/html_badge/" +
            "remove_badge?token=To%2FBnjzloZ3UfQdcSaYfDgGhfdFNfsId3o7pv3mU8hWklLRmkDjLfDMm8YekhKgVflrfrjKi9EUfTornumLzVoJpKih9PKRXjSKQ9Rbu1b9AIS1denfplEPZuwTkjqv2VSuj4XvY5KaKwi%2F1rE3CEJ8w3UKP6WFi%2BvrxnvC1Ky3fH6NPdMtoFhHFD41qfgXwOXBhmL%2Bch3kLUA1xZEX6NM4vMOwinYImO9OyTiPV%2BLuAzmtYQ3sQXIfFNWVUn3wnOWujOIPL7zXN0NiWr%2F527ahoBX3i4RUmtOrqTIMPsfppX6Wk6IhH39G1gOsXv5dfigcdToy3leUx0XnsKP2CY54IEayA1pZ8Hznu6yvqho0GbmZuMcnAwmcbbHg5vboIwdFBBMdxSbLzZHVyDBqynRWDhGMBxxHofPI9XZXfG7mYG7a%2F3dtO%2BuJthfw7Ob5Ye5XeycLwOn1CUMRhmcJMoz47pjZkEb6TRTqo3Jy%2FHXM%2Br12XHR7d2uQjgk0dDTDunvrtZl7m1XREF1Csk7MimWS70QfOppOahMgiIauT%2B1M%3D";
        window.__genspark_locale = "ja-JP";
        window.__genspark_token = "To/BnjzloZ3UfQdcSaYfDgGhfdFNfsId3o7pv3mU8hWklLRmkDjLfDMm8YekhKgVflrfrjKi9EUfTornumLzVoJpKih9PKRXjSKQ9Rbu1b9AIS1denfplEPZuwTkjqv2VSuj4XvY5KaKwi/1rE3CEJ8w3UKP6WFi+vrxnvC1Ky3fH6NPdMtoFhHFD41qfgXwOXBhmL+ch3kLUA1xZEX6NM4vMOwinYImO9OyTiPV+LuAzmtYQ3sQXIfFNWVUn3wnOWujOIPL7zXN0NiWr/527ahoBX3i4RUmtOrqTIMPsfppX6Wk6IhH39G1gOsXv5dfigcdToy3leUx0XnsKP2CY54IEayA1pZ8Hznu6yvqho0GbmZuMcnAwmcbbHg5vboIwdFBBMdxSbLzZHVyDBqynRWDhGMBxxHofPI9XZXfG7mYG7a/3dtO+uJthfw7Ob5Ye5XeycLwOn1CUMRhmcJMoz47pjZkEb6TRTqo3Jy/HXM+r12XHR7d2uQjgk0dDTDunvrtZl7m1XREF1Csk7MimWS70QfOppOahMgiIauT+1M=";
    