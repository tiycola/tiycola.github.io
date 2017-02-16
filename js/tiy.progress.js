(function(tiy, $) {
    'use strict';

    var progress, content, section;
    var PROGRESS_KEY = 'tiy-section-progress';
    var NAME_KEY = 'tiy-name';
    var SURVEY_KEY = 'tiy-survey-answers';

    init();

    function init() {
        var name = localStorage.getItem(NAME_KEY);
        if (name) {
            $('.student-name').text(`Hello again ${name}!`);
        } else {
            // Removed by Su's request since she sends this to every applicant,
            // not just people who are definitely taking the class.
            // askForName();
        }

        content = $('.content');
        section = content.data('section') || null;

        try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch(e){ progress = {}; }

        markNavProgress();

        if (content.data('category') !== 'static') {
            loadProgressUI();
        } else if (section === 'Final Survey') {
            initFinalSurvey();
        }

        buildSectionTOC();
    }

    function loadProgressUI() {
        content.prepend(
`<h3 class='progress-action'>
    <span class='complete-notice'>&#10003; Complete <a href='#' class='undo' title='Undo'>&#8635;</a></span>
    <span class='incomplete-notice'><a href='#' class='complete btn'>&#10003; Mark Complete</a></span>
</h3>`
        );

        $('.' + ((progress[section] === true) ? 'in' : '') + 'complete-notice').hide();
        $('.complete, .undo').click(toggleSectionComplete);
    }

    function toggleSectionComplete(e) {
        var ui;

        e.preventDefault();

        progress[section] = !progress[section];
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        $('.incomplete-notice, .complete-notice').toggle();

        markNavProgress();
    }

    function markNavProgress() {
        var navItems = $('header nav li');
        navItems.find('.is-complete').remove();

        navItems.each(function markComplete() {
            if (progress[$(this).text()]) {
                $(this).append(`<span class='is-complete'>&#10003;</span>`);
            }
        });
    }

    function askForName() {
        var modal = `<div class='modal-background'></div>
<aside class='modal name-entry'>
    <h3>Hello!</h3>
    <p>
        It looks like we haven't met yet. Can you introduce yourself?
        This website will track your progress through the onboarding
        process for The Iron Yard. At the end of these sections you
        will be asked to submit a final onboarding survey which will
        send your name (below) along with your progress.
    </p>
    <form>
        <label for='student_name'>My name is:</label>
        <input type='text' id='student_name' autofocus>
        <input type='submit' class='save-name btn' value='Save'>
    </form>
</aside>`;

        $('body')
            .append(
                $('<section class="name-entry-modal">').html(modal)
            )
            .find('.modal-background')
                .height(document.body.clientHeight + 'px')
                .end()
            .find('.name-entry form').submit(function(e) {
                e.preventDefault();

                var name = $('#student_name').val();
                if (name && name.length) {
                    localStorage.setItem(NAME_KEY, name);
                    $('.name-entry-modal').remove();
                    $('.student-name').text(`Hello again ${name}!`);
                }
            });
    }

    function initFinalSurvey() {
        var form = $('.final-survey');
        var data = {};
        try { data = JSON.parse(localStorage.getItem(SURVEY_KEY)) || {}; } catch(e) { /* don't care... */ }

        if (data && data.succeeded) {
            return showSurveySuccess(form);
        }

        form.find('.student-name').val(localStorage.getItem(NAME_KEY) || '');
        form.submit(function(e) {
            e.preventDefault();

            var newData = {};
            form.serializeArray().forEach(function(field) {
                newData[field.name] = field.value;
            });
            newData['section-progress'] = progress;

            console.info('Submitting survey to %s %s', form.attr('method'), form.attr('action'), newData);

            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: newData,
                dataType: 'json'
            }).done(function() {
                showSurveySuccess(form);
                newData.succeeded = true;
                window.scrollTo(0,0);
            }).fail(function() {
                alert('Sorry, but it looks like submitting the survey failed... Can you try again later? (Don\'t worry, I\'ll save your answers.)');
            }).always(function() {
                localStorage.setItem(SURVEY_KEY, JSON.stringify(newData));
            });
        });
    }

    function showSurveySuccess(form) {
        form.before(
            `<h3>Thank you for submitting your survey!</h3>
            <p>I can't wait to see you in class!</p>`
        );
        form.remove();
    }

    function buildSectionTOC() {
        var headers,
            toc = content.find('.toc');

        if (!toc.length) { return; }

        headers = toc.nextAll('h1,h2,h3,h4,h5,h6').map(function() {
            return `<li><a href='#${this.innerText.toLowerCase().replace(/\s/g,'-')}'>${this.innerText}</a></li>`;
        });

        toc.html(`<ul>
            ${[].slice.call(headers).join('')}
         </ul>`);
    }


    window.tiy = tiy;

})(window.tiy || {}, window.jQuery);
